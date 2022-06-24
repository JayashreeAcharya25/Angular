import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import * as JsonData from './data.json'

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  formValue!: FormGroup;
  data: any = []

  jsonData: any = (JsonData as any).default;

  constructor(private userData: SharedService, private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      username: [''],
      email: [''],
      phone: ['']
    })

    // this.httpClient.get('./data.json').subscribe(res=>{
    //   console.log(res)
    // }, err =>{
    //   console.log("Failed to load data...", err)
    // })

  }

  sendMail(data: any) {
    console.log(data,this.jsonData);
    data = this.jsonData
    this.userData.sendMail(data, this.jsonData).subscribe(res => {

      console.log("Response", res);
    }, err => console.log('Error', err))
  }
  

}
