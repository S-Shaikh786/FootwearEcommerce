import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';
declare var Razorpay:any;


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 
  // rzp_test_k4f6QiJJFejcj2

  billingform!: FormGroup;
  formdata: any;
  cartproducts: any;
  grandTotal: any = 0;
  amount: any;


  message: any = "Not yet stared";
  paymentId = "";
  error = "";
  orderdata: any;
  api: any;

  constructor(private formBuilder:FormBuilder, private api2:ApiService){}


  // checkoutForm!: FormGroup;

  // constructor(private fb: FormBuilder) { }

  ngOnInit(): void {


    this.orderdata = new FormGroup({
      id: new FormControl("0", Validators.compose([Validators.required])),
      firstname: new FormControl("", Validators.compose([Validators.required])),
      lastname: new FormControl("", Validators.compose([Validators.required])),
      Address: new FormControl("", Validators.compose([Validators.required])),
      city: new FormControl("", Validators.compose([Validators.required])),
      pincode: new FormControl("", Validators.compose([Validators.required])),
      phoneno: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])),
      email:new FormControl("",Validators.compose([Validators.required])),
      price: new FormControl(""),
    })

    // this.checkoutForm = this.fb.group({
    //   country: ['', Validators.required],
    // });
    this.cartproducts = JSON.parse(localStorage.getItem('Products') || "[]");
    this.calculateGrandTotal();
    this.submitdata();

    this.amount = this.grandTotal * 100;

  }

  // transferapi(data: any) {
  //   this.api.post(data).subscribe(() => {
  //     console.log();
  //   })

  //   this.orderdata.reset();
  //   console.log(data);

  // }

  transferapi(data:any)
  {
    console.log(data);
    this.api2.post1(data).subscribe((result)=>{

    })
    
  }


  submitdata() {
    this.formdata = new FormGroup({
      name: new FormControl,
      address: new FormControl,
      city: new FormControl,
      state: new FormControl,
      pincode: new FormControl,
      email: new FormControl,
      phoneno: new FormControl
    })

    console.log(this.formdata);
    
  }
  calculateGrandTotal() {
    // for (let i = 0; i < this.cartproducts.length; i++) {
    //   let smalltotal = this.cartproducts[i].qty * this.cartproducts[i].price;
    //   this.grandTotal += smalltotal;

    // }

    for (let x of this.cartproducts) {
      this.grandTotal = parseFloat(this.grandTotal + (x.price * x.quantity));
    }
  }

  options = {
    "key": "rzp_test_k4f6QiJJFejcj2",
    "amount": "200",
    "name": "Samina Shaikh",
    "description": "Web Development",
    "image": "https://www.abhijitgatade.com/assets/img/favicon.png",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  get form() { return this.billingform.controls; }

  paynow() {
    console.log(this.amount);


    this.paymentId = '';
    this.error = '';
    this.options.amount = this.amount; //paise
    this.options.prefill.name = "Samina";
    this.options.prefill.email = "samina786ms@gmail.com";
    this.options.prefill.contact = "9970620964";
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
    }
    );
    this.formdata = new FormGroup({
      name: new FormControl,
      address: new FormControl,
      city: new FormControl,
      state: new FormControl,
      pincode: new FormControl,
      email: new FormControl,
      phoneno: new FormControl
    })

    console.log(this.formdata);

  }

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Success Payment";
    Swal.fire({
      icon: 'success',
      title: 'Order Placed',
      text: 'Your order has been successfully placed!',
      confirmButtonText: 'OK'
    });

  }


}