import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  constructor(private api:ApiService){}
  
  ngOnInit(): void {
    this.api.get().subscribe((result)=>{
      this.products = result;
    })
  }

}
