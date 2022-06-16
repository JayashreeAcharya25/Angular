import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {

  formValue! : FormGroup

  constructor( ) { }

  ngOnInit(): void {

  }

  

  addBrands(data: any){
    console.log(data)
    alert('Hello')
  }

}
