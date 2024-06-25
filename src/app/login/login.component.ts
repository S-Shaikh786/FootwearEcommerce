import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  formdata: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formdata = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(formData: any) {
    const { username, password } = formData;
    if (username === 'admin' && password === '123') {
      Swal.fire({
        title: "Welcome to Dashboard",
        text: "Login Successfully!",
        icon: "success"
      });
      this.router.navigate(['/admin/dashboard']);
    } 
    else {

      Swal.fire({
        icon: "error",
        text: "Invalid Credentials..!",
      });
    }
  }

  } 



