import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared-service.service';
import {ProductModel} from './product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  formvalue!: FormGroup
  products:any = []

  productObjModel: ProductModel = new ProductModel()

  constructor(private formBuilder: FormBuilder, private api:SharedService,private router: Router) { 
    this.formvalue = this.formBuilder.group({
      id: [''],
      pro_name: [''],
      pro_price: [''],
    })
  }

  ngOnInit() {

    this.api
      .getProduct()
      .subscribe((response: any)=>{
        this.products = response.data
        console.log(response)
      }, error =>{
        console.log(error)
      })
    
  }

  addToCart(product: any){

    this.productObjModel.id = product.id;
    this.formvalue.controls['id'].setValue(product.id)
    this.formvalue.controls['pro_name'].setValue(product.pro_name)
    this.formvalue.controls['pro_price'].setValue(product.pro_price)
    console.log(this.formvalue.value)
  }

  sendData(){
    this.router.navigate(['yourcart'], { state: { product: 'hello' } });
  }

}
