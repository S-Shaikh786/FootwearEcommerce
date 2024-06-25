import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from '../product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from '../home/home.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';

const routes: Routes = [

    {path:'',component:LandingComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'home',component:HomeComponent},
    {path:'add-product',component:AddProductComponent},
    {path:'adminproducts',component:AdminproductsComponent},

    {path:'orders',component:OrdersComponent},


   ]
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
