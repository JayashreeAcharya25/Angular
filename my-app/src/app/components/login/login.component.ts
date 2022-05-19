import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup

  constructor( private router:Router, private formBuilder: FormBuilder, private http: HttpClient)
    {  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  onLogin(){
    
    // this.http.get<any>("http://localhost:4200", this.signupForm.value)
    // .subscribe( res =>{
    //  const user = res.find((a: any) =>{
    //  return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    //}) ;
    // if(user){
    //   alert("Login Success!!")
    //    this.loginForm.reset();
    //} else { alert("user not found")}
    // err =>{
    //   console.log(err)
    // })
      this.loginForm.reset();
      alert("LoggedIn..");
      this.router.navigate(['admin']);
    // }
   
  }

}
