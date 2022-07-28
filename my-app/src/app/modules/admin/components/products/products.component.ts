import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import {ProductModel} from './product.model'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  @ViewChild('ukclose') ukclose: any;

  formValue!: FormGroup

  array_list: any = []
  business_unit: any = []
  product_list: any = [];
  bu_id: any
  productObjModel: ProductModel = new ProductModel()

  constructor( private formBuilder: FormBuilder, private api: SharedService) { }

  ngOnInit(): void {

    this.api
    .getProducts()
    .subscribe((response: any) =>{
      // console.log(response)
      this.product_list = response.products
      this.business_unit = response.business_unit
      console.log(response.products)
      console.log(response.business_unit)
      this.bu_id = this.business_unit[0].bu_id
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

    console.log('Message From ngOnInit..')

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

    const data = {
      'formvalue': this.formValue.value,
      'bu_id': this.bu_id
    }

    this.api
      .updateProduct(data)
      .subscribe(
        (response: any) =>{
          console.log(response)
          // Swal.fire({
          //   icon: 'success',
          //   title: response.message,
          // })
          // this.ukclose.nativeElement.click()
        },
        error =>{
          console.log(error)
        }
      )

  }


  deleteProducts(id: any){
    const data = {
      'bu_id': this.bu_id,
      'pro_id': id
    }
    this.api
      .deleteProduct(data)
      .subscribe((response: any) => {
        console.log(response.data)
        // Swal.fire({
        //   icon: 'success',
        //   title: '<h3 style="font-size: 18px; font-family: Joan, serif; font-weight: 500 ">'+response.message+'</h3>',
        //   confirmButtonColor: '#7a0459',
          
        // });
        
      })
  }

}


