import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../login/login.component.css']
})
export class SignupComponent implements OnInit {

  signupForm! : FormGroup
  users: any

  constructor(  private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private userData: SharedService) { 
    
  }

  ngOnInit(): void {

    // this.userData.getUsers().subscribe((data => {
    //   this.users = data;
    //   console.log(this.users);
    // }))
    
  }


  register(data: any){
    
    // console.log(data);

    this.userData.register(data).subscribe(res => {
      alert("User Created..")
      this.router.navigate(['login']);
        console.log("Response",res);
    }, err => console.log('Error',err)) 

  }
}
