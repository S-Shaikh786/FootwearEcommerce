import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  orderdata:any;
  constructor(private api:ApiService)
  {

  }

  ngOnInit(): void {
    this.api.getorderdata().subscribe((result: any)=>{
      this.orderdata=result;
      console.log(this.orderdata);
      
    })
  }


}
