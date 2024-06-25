import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  // url = "https://fakestoreapi.com/products"
  apiService: any;
  constructor(private http:HttpClient) { }

  baseurl:any="https://65ec07d443ce164189347779.mockapi.io/Ecommerce/products";
  orderapi="https://65e82cd24bb72f0a9c4e75d4.mockapi.io/api/products";
  // storeapi="https://65cda05fc715428e8b3eaf46.mockapi.io/products"

  
  get()
  {
    return this.http.get(this.baseurl);
  }

  getById(id:number){
    return this.http.get(this.baseurl + "/" + id)
  }
  

  geturl(){
     
    return this.http.get(this.baseurl);
  }

  // leo()
  // {
  //  return this.http.get(this.storeapi);
  // }

  getbyid(id:number){
    
    return this.http.get(this.baseurl + "/" +id );

  }
  post1(data:any) //order api
  {
   return this.http.post(this.orderapi,data);
  }
  
  getorderdata()
  {
   return this.http.get(this.orderapi);
  }


  post(body:any){

    return this.http.post(this.baseurl,body);

  }
  put(id:number,body:any){

    return this.http.put(this.baseurl + "/" +id, body);
    
  }
  
  delete(id:number){

    return this.http.delete(this.baseurl + "/" +id );

    
  }
 
  

  }
  
  
  

