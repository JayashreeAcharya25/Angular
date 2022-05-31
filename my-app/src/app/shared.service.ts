import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  APIUrl = "http://127.0.0.1:8000"

  constructor(private http: HttpClient) { }


  register(val: any){
    return this.http.post(this.APIUrl + '/users/register', val);
  }

  login(val: any){
    return this.http.post(this.APIUrl + '/users/login', val);
  }

  getUsers(){
    return this.http.get(this.APIUrl + '/users/user');
  }

  // getCurrentUser(val: any){
  //   return this.http.get(this.APIUrl + `/users/user`, val);
  // }

  updateUsers(val: any){
    return this.http.put<any>(this.APIUrl + `/users/user`, val)
    .pipe(map((res: any)=>{
      return res;
    }));
  }
  
  deleteUsers(id: any){
    return this.http.delete(this.APIUrl + `/users/user/${id}`);
  }

  addProducts(val: any){
    return this.http.post(this.APIUrl + `/products/product`, val);
  }

  getProducts(){
    return this.http.get(this.APIUrl + `/products/product`);
  }

}
