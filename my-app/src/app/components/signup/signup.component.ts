import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../login/login.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup

  constructor(  private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  onSignup(){
    // this.http.post<any>("http://localhost:4200", this.signupForm.value)
    // .subscribe( res =>{
    //   alert("User Created..")
    //   this.signupForm.reset();
    //   this.router.navigate(['login']);
    //   console.log(res)
    // }, err =>{
    //   console.log(err)
    // })
    //this.signupForm.reset();
    console.log(this.signupForm.value)
    // alert("User Created..")
    this.router.navigate(['login']);
  }
}
