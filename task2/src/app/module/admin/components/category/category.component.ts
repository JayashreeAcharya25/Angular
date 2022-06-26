import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['../brand/brand.component.css']
})
export class CategoryComponent implements OnInit {

  formValue!: FormGroup
  res_message: any;
  message: any;
  get_brand: any
  get_category: any
  brands: any
  categories: any

  constructor(private api: SharedService, private formBuilder: FormBuilder) { 
    this.formValue = this.formBuilder.group({
      c_slno: [''],
      c_name: [''],
      c_brand: [''],
    })
  }

  ngOnInit(): void {
    
    this.api
        .getBrand()
        .subscribe(
          response=>{
            this.get_brand = response
            this.brands = this.get_brand.data
            console.log(this.brands)
          },
          error =>{
            console.log(error)
          }
        )

    this.api
      .getCategory()
      .subscribe(
        response=>{
          this.get_category = response
          this.categories = this.get_category.data
          console.log(this.categories)
        },
        error =>{
          console.log(error)
        }
      )
  }

  addCategories(){
    console.log(this.formValue.value)
    this.api
        .addCategory(this.formValue.value)
        .subscribe(
          response =>{
            this.res_message = response
            this.message = this.res_message.message
            Swal.fire({
              title: 'Success',
              text: this.message,
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            console.log(response);
          },
          error => {
            console.log(error);
          }
        )
  }

}
