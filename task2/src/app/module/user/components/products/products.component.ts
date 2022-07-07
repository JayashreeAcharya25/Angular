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

  productObjModel: ProductModel = new ProductModel()

  constructor(private formBuilder: FormBuilder, private _service: ProductsService, private api:SharedService,private router: Router) { 
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

    // this._service.additems.next(this.formvalue.value)
    this._service.additems(this.formvalue.value)
  }


}
