  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { ApiService } from '../api.service';

  @Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
  })
  export class ProductComponent implements OnInit {

    id: any;
    product: any;
    quantity:any=1;
    cartProducts:any = []


    constructor(private route: ActivatedRoute, private api: ApiService) {
      this.id = route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.api.getById(this.id).subscribe((result)=>{
        this.product = result
      })

      // api.get("https://fakestoreapi.com/products/" + this.id).subscribe((result) => {
      //   this.product = result;
      // })

    }
    ngOnInit(): void {
      this.cartProducts = JSON.parse(localStorage.getItem('Products') || '[]')
    }

    addqty(){
      this.quantity++
    }
    minus(){
    if(this.quantity>1){
      this.quantity--
    }
  }
  AddToCart(product:any){
    
    let itemExist = false;

    for(let i = 0; i<this.cartProducts.length; i++){
      if(this.cartProducts[i].id === product.id){
        this.cartProducts[i].quantity+= parseInt(this.quantity);
        itemExist = true;
        break;
      }
    }

    if(!itemExist){


      let box = {
          id: this.product.id,
          image: this.product.image,
          name: this.product.title,
          price: this.product.price,
          quantity: this.quantity
        }
      
        this.cartProducts.push(box);
        console.warn(this.cartProducts);
      
        localStorage.setItem('Products', JSON.stringify(this.cartProducts))
    }
    
  }


  }


