import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  formValue! : FormGroup;

  constructor(private userData: SharedService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      username: [''],
      email: [''],
      phone: ['']
    })
  }

  sendMail(data: any){
    console.log(data);
    this.userData.sendMail(data).subscribe(res => {
        console.log("Response",res);
    }, err => console.log('Error',err)) 
  }

}
