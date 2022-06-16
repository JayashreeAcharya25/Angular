import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class SharedServiceService {

  APIUrl = "http://127.0.0.1:8000"

  constructor(private http: HttpClient) { }

  addBrand(val: any){
    return this.http.post(this.APIUrl + '/brands/add', val)
  }
}
