import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit {


  products:any;
  constructor(private api:ApiService){}
  
  ngOnInit(): void {
   this.getAll();
  }
  
  getAll()
  {
    this.api.geturl().subscribe((result)=>{
      this.products=result;
      console.log(this.products);
      
     })
     
  }

  deleteProduct(id: number) {
  this.api.delete(id).subscribe((result)=>{
  this.getAll();
  })
  }
  

}
