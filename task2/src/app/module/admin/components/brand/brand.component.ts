import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {

  formValue!: FormGroup
  res_message: any;
  message: any;
  selectedFile!: any
  get_res_data: any
  brands: any

  constructor( private api: SharedService, private formBuilder: FormBuilder) {
    this.formValue = this.formBuilder.group({
      b_slno: [''],
      b_name: [''],
      b_image: [null],
    })
   }

  ngOnInit(): void {
    this.api
        .getBrand()
        .subscribe(
          response =>{
            this.get_res_data = response
            this.brands = this.get_res_data.data
            console.log(this.brands)
          },
          error =>{
            console.log(error)
          }
        )
  }

  uploadFile(event: any){
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }



  addBrands() {

    let formData = new FormData()

    formData.append('b_slno', this.formValue.get('b_slno')?.value)
    formData.append('b_name', this.formValue.get('b_name')?.value)
    formData.append('b_image', this.selectedFile)
    console.log(formData)

    this.api
        .addBrand(formData)
        .subscribe(
          response => {
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

