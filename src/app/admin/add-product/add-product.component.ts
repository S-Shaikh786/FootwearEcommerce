import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit  {

  form: any;


  formData:any;
  constructor(private api:ApiService,private router:Router){}
  ngOnInit(): void {
    this.bind();

  }   
  bind(){
    this.formData=new FormGroup({
      id:new FormControl("0"),
      title:new FormControl(" "),
      price:new FormControl(" "),
      image:new FormControl(" "),
    })

  }
  saveData(data: any) {
    console.log(data);
    this.api.post(data).subscribe((result)=>{
      this.router.navigate(['admin/adminproducts'])
    })
    }
}
