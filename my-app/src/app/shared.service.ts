import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  APIUrl = "http://127.0.0.1:8000"

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.APIUrl + '/users/user');
  }

  addUser(val: any){
    return this.http.post(this.APIUrl + '/users/user', val);
  }

  deleteUsers(id: any){
    return this.http.delete(this.APIUrl + `/users/user/${id}`);
  }

}
