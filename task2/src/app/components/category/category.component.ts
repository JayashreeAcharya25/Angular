import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  get_brand: any
  brands: any

  constructor(private api: SharedService) { }

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
  }

}
