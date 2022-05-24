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

  public signupForm !: FormGroup
  users: any

  constructor(  private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private userData: SharedService) { 
    
  }

  ngOnInit(): void {

    this.userData.getUsers().subscribe((data => {
      this.users = data;
      console.log(this.users);
    }))
    
  }


  onSignup(data: any){
    
    // console.log(data);

    this.userData.addUser(data).subscribe(res => {
      this.users = res;
      alert("User Created..")
      this.router.navigate(['login']);
      console.log("Response",res);
    }, err => console.log('Error',err)) 

  }
}
