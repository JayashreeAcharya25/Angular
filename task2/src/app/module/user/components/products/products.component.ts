import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared-service.service';
import {ProductModel} from './product.model'
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  formvalue!: FormGroup
  products:any = []

  count: any = 0

  productObjModel: ProductModel = new ProductModel()

  constructor(private formBuilder: FormBuilder, private _service: ProductsService, private api:SharedService,private router: Router) { 
    this.formvalue = this.formBuilder.group({
      id: [''],
      pro_name: [''],
      pro_price: [''],
      pro_qty: [''],
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

    // this.count = this._cart.returnitemcount()
    // console.log(this.count)
  }

  addToCart(product: any){

    this.productObjModel.id = product.id;
    this.formvalue.controls['id'].setValue(product.id)
    this.formvalue.controls['pro_name'].setValue(product.pro_name)
    this.formvalue.controls['pro_price'].setValue(product.pro_price)
    this.formvalue.controls['pro_qty'].setValue(product.pro_qty)
    console.log(this.formvalue.value)
    ++this.count;

    // let cartDataNull = localStorage.getItem('cart')
    // if(cartDataNull == null){
    //   let storeData: any = [];
    //   storeData.push(product)
    // }

    // localStorage.setItem('cart', JSON.stringify(product))

    // this._service.additems.next(this.formvalue.value)
    this._service.additems(this.formvalue.value)
    
  }


}
