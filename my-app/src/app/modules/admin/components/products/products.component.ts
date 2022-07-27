import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import {ProductModel} from './product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  formValue!: FormGroup

  array_list: any = []
  business_unit: any = []
  product_list: any = [];
  productObjModel: ProductModel = new ProductModel()

  // product_slno: any;
  // product_name: any;
  // // product_image: any;
  // product_price: any;
  // currentUpload: any;

  // formValue! : FormGroup

  constructor( private formBuilder: FormBuilder, private api: SharedService) { }

  ngOnInit(): void {

    this.api
    .getProducts()
    .subscribe((response: any) =>{
      // console.log(response)
      this.product_list = response.products
      this.business_unit = response.business_unit
      
    })

    this.formValue = this.formBuilder.group({
      pro_id: [''],
      pro_code: [''],
      pro_name: [''],
      bra_id: [''],
      pro_mrp: [''],
      pro_purprice: [''],
      pro_baseprice: [''],
      pro_saleprice: [''],
      pro_hsn: [''],
    })

  }

  edit(row: any){
    this.productObjModel.pro_id = row.pro_id;
    console.log(row.pro_id)

    this.formValue.controls['pro_id'].setValue(row.pro_id)
    this.formValue.controls['pro_code'].setValue(row.pro_code)
    this.formValue.controls['pro_name'].setValue(row.pro_name)
    this.formValue.controls['bra_id'].setValue(row.bra_id)
    this.formValue.controls['pro_mrp'].setValue(row.pro_mrp)
    this.formValue.controls['pro_purprice'].setValue(row.pro_purprice)
    this.formValue.controls['pro_baseprice'].setValue(row.pro_baseprice)
    this.formValue.controls['pro_saleprice'].setValue(row.pro_saleprice)
    this.formValue.controls['pro_hsn'].setValue(row.pro_hsn)
  }

  onUpdate(){
    console.log(this.formValue.value)
    this.api
      .updateProduct(this.formValue.value)
      .subscribe(
        response =>{
          console.log(response)
        },
        error =>{
          console.log(error)
        }
      )

  }

}
