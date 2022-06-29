import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import {BrandModel} from './brands.model'

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  formValue!: FormGroup
  data: any
  brand_list: any = []
  business_unit: any = []

  brandObjModel: BrandModel = new BrandModel()

  constructor( private formBuilder: FormBuilder, private api: SharedService) { }

  ngOnInit(): void {
    this.api.getBrands().subscribe((res: any) =>{
      console.log(res)
      this.brand_list = res.brands
      this.business_unit = res.business_unit
      console.log("Brands",this.brand_list);
      console.log("Business Unit",this.business_unit);
    })

    this.formValue = this.formBuilder.group({
      bra_id: [''],
      bra_sname: [''],
      bra_name: [''],
      bra_start_date: [''],
      bra_end_date: [''],
      be_id: [''],
      client_users_id: [''],
    })
  }

  edit(row: any){
    this.brandObjModel.bra_id = row.pro_id;
    console.log(row.pro_id)
    
    this.formValue.controls['bra_id'].setValue(row.bra_id)
    this.formValue.controls['bra_sname'].setValue(row.bra_sname)
    this.formValue.controls['bra_name'].setValue(row.bra_name)
    this.formValue.controls['be_id'].setValue(row.be_id)
    this.formValue.controls['client_users_id'].setValue(row.client_users_id)
  }

  onUpdate(){
    console.log(this.formValue.value)
    
    this.data = {
      formValue: this.formValue.value,
      bu_id: this.business_unit[0].bu_id,
      bu_dbname: this.business_unit[0].bu_dbname
    }
    this.api
      .updateBrands(this.data)
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
