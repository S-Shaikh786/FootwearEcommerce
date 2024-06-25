import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

cartProducts:any;
deliveryCharge = 0; 
discountAmount = 45;

constructor(private router:Router){

}

ngOnInit(): void {
  this.cartProducts = JSON.parse(localStorage.getItem('Products') || '[]')
}

removeItem(index: number): void {
  this.cartProducts.splice(index, 1);
  localStorage.setItem('Products', JSON.stringify(this.cartProducts));
}

calculateSubtotal(product: any): number {
  return product.price * product.quantity;
}

calculateGrandTotal(): number {
  let grandTotal = 0;

  for (const product of this.cartProducts) {
    grandTotal += this.calculateSubtotal(product);
  }


  return grandTotal;
}

calculateTotal(product: any): number {
  return product.price * product.quantity;
}
updateTotal(): void {

}
checkout(){
  this.router.navigate(['/checkout'])
}

}
