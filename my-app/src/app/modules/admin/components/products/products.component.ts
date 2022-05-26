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

  addProduct(val: any){
    this.Products.addProducts(val).subscribe(res =>{
      this.product_list = res;
      alert("Added");
      console.log(res);
    })
  }


}
