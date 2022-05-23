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
    this.userData.getUsers().subscribe((data => {
      this.users = data;
    }))
  }

  ngOnInit(): void {
    // this.signupForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // })
    
  }


  onSignup(data: any){
    // this.http.post<any>(this.service.APIUrl+ 'users/user', this.signupForm.value)
    // .subscribe( res =>{
    //   alert("User Created..")
    //   this.signupForm.reset();
    //   this.router.navigate(['login']);
    //   console.log(res)
    // }, err =>{
    //   console.log("Error",err)
    // })


    //this.signupForm.reset();
    // console.log(this.signupForm.value)
    // alert("User Created..")
    //this.router.navigate(['login']);

    // this.service.signupForm().subscribe(data=>{

    // })
    console.log(data);

    this.userData.addUser(data).subscribe(res => {
      this.users = res;
      console.log(res);
    }, err => console.log(err)) 
    
    



  }
}
