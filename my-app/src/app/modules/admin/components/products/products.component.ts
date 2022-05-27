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

  product_slno!: string;
  product_name!: string;
  product_image!: File;
  product_price!: string;

  public formValue! : FormGroup

  constructor( private formBuilder: FormBuilder, private Products: SharedService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      product_slno: [''],
      product_name: [''],
      product_image: [''],
      product_price: ['']
    })

    this.Products.getProducts().subscribe( res =>{
      this.product_list = res;
      console.log(res);
    })
  }

  onFileUpload(event: any){
    this.product_image = event.target.files[0]
    console.log(event.target.files[0])
  }

  addProduct(formData: any){
    

    formData = new FormData();
      formData.append('product_slno', this.product_slno);
      formData.append('product_name', this.product_name);
      formData.append('product_image', this.product_image);
      formData.append('product_price', this.product_price);

      console.log(formData);

    this.Products.addProducts(formData).subscribe(res =>{
      this.product_list = res;
      alert("Added");
     
      console.log(res);
    }, error => console.log(error))
  }


}
