import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../signup/signup.component.css']
})
export class LoginComponent implements OnInit {

  formValue!: FormGroup

  res_message: any;
  message: any;

  constructor(private formBuilder: FormBuilder, private api: SharedService) { 
    this.formValue = this.formBuilder.group({
      email: [''],
      password: [''],
    })
   }

  ngOnInit(): void {
  }

  login(){
    this.api
    .login(this.formValue.value)
    .subscribe(
      response=>{
        this.res_message = response
            this.message = this.res_message.message
            Swal.fire({
              title: 'Success',
              text: this.message,
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            console.log(response);
            
      },
      error =>{
        console.log(error);
      }
    )
  }

}
