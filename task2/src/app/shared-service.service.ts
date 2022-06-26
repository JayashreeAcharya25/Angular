import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  APIUrl = "http://127.0.0.1:8000/v1"

  constructor(private http: HttpClient) { }

  signUp(val: any){
    return this.http
      .post(this.APIUrl + '/user/register', val)
  }

  login(val: any){
    return this.http
      .post(this.APIUrl + '/user/login', val)
  }


  addBrand(val: any) {
    return this.http
      .post(this.APIUrl + '/brand/addbrand', val)
  }

  getBrand() {
    return this.http
      .get(this.APIUrl + '/brand/getbrand')
  }

  addCategory(val:any){
    return this.http
      .post(this.APIUrl + '/category/addcategory', val)
  }

  getCategory(){
    return this.http
      .get(this.APIUrl + '/category/getcategory')
  }

  addProduct(val:any){
    return this.http
      .post(this.APIUrl + '/product/addproduct', val)
  }

  getProduct(){
    return this.http
      .get(this.APIUrl + '/product/getproduct')
  }
}
