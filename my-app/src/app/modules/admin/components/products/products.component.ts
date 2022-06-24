import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
 
  product_list: any;

  product_slno: any;
  product_name: any;
  // product_image: any;
  product_price: any;
  currentUpload: any;

  formValue! : FormGroup

  constructor( private formBuilder: FormBuilder, private Products: SharedService) { }

  ngOnInit(): void {

    this.Products.getProducts().subscribe(res =>{
      this.product_list = res;
      console.log(this.product_list);
    })

    this.formValue = this.formBuilder.group({
      product_slno: [''],
      product_name: [''],
      product_image: [''],
      product_price: ['']
    })

  }

  // onFileUpload(event: any){
  //   this.product_image = event.target.files[0]
  //   console.log(this.product_image);
  // }

  addProduct(formValue: any){
    


    // let formData = new FormData();

    // this.product_image = event.target.files;
    // console.log(event.target.files);
    // this.currentUpload = this.product_image.item(0)

    // for (let i = 0; i < formValue.length; i++) {
      // formData.append('product_slno', formValue.product_slno);
      // formData.append('product_name', formValue.roduct_name);
      // formData.append('product_image', formValue.product_image);
      // formData.append('product_price', formValue.product_price);
    // }

      console.log(formValue);
      // formData.forEach((value,key) => {
      //   console.log(key+" "+value)
      // });
      // console.log(formValue.length);


      // const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');

    // const newLocal = 'media';
    this.Products.addProducts(formValue).subscribe(res =>{
      alert("Added");
      console.log(res);
    }, error => console.log(error))
  }


}
