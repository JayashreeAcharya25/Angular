import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup
  users: any

  constructor( private router:Router, private formBuilder: FormBuilder, private http: HttpClient, private userData: SharedService)
    {  }

  ngOnInit(){
    this.userData.getUsers().subscribe((data => {
      this.users = data;
      console.log(this.users);
    }))
  }

  onLogin(data: any){

    this.userData.getUsers().subscribe(res =>{
      let user = this.users.find((a: any) =>{
          
        return a.email === data.email && a.password === data.password
      });
      if(user){
        alert("Login Success!!")
        console.log(res);
        this.router.navigate(['admin/home']);
      } else{
        alert('User not found');
        window.location.reload()
      }
    }, err=> { 
      console.log("Error", err)
    })
   
  }

}
