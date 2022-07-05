import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from '../../../../shared-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../brand/brand.component.css']
})
export class ProductComponent implements OnInit {

  formValue!: FormGroup
  selectedFile: any

  brands: any
  categories:any
  products:any

  pro_color: any = 1
  uid: any = 1

  constructor(private api: SharedService, private formBuilder: FormBuilder) { 
    this.formValue = this.formBuilder.group({
      pro_slno: [''],
      pro_code: [''],
      pro_name: [''],
      pro_image: [''],
      pro_desc: [''],
      pro_brand: [''],
      pro_category: [''],
      pro_sgst: [''],
      pro_cgst: [''],
      pro_price: [''],
    })
  }

  ngOnInit(): void {

    this.api
        .getBrand()
        .subscribe(
          (response: any) => this.brands = response.data,
          error => console.log(error)
        )

    this.api
      .getCategory()
      .subscribe(
        (response: any) => this.categories = response.data,
        error => console.log(error)
      )

    this.api
      .getProduct()
      .subscribe(
        (response: any) => this.products = response.data,
        error => console.log(error)
        
      )
  }

  uploadFile(e: any){
    this.selectedFile = e.target.files[0]
  }

  addProducts(){
    let formData = new FormData()

    formData.append('pro_slno', this.formValue.get('pro_slno')?.value)
    formData.append('pro_code', this.formValue.get('pro_code')?.value)
    formData.append('pro_name', this.formValue.get('pro_name')?.value)
    formData.append('pro_desc', this.formValue.get('pro_desc')?.value)
    formData.append('pro_brand', this.formValue.get('pro_brand')?.value)
    formData.append('pro_category', this.formValue.get('pro_category')?.value)
    formData.append('pro_sgst', this.formValue.get('pro_sgst')?.value)
    formData.append('pro_cgst', this.formValue.get('pro_cgst')?.value)
    formData.append('pro_price', this.formValue.get('pro_price')?.value)
    formData.append('pro_price', this.formValue.get('pro_price')?.value)
    formData.append('pro_color', this.pro_color)
    formData.append('pro_image', this.selectedFile)
    formData.append('uid', this.uid)

    this.api
        .addProduct(formData)
        .subscribe(
          (response: any) => {
            Swal.fire({
              icon: 'success',
              title: response.message,
            });
            console.log(response);
          },
          error => 
            console.log(error)
          
        )
  }

}
