import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup
  users: any

  constructor( private router:Router, private userData: SharedService)
    {  }

  ngOnInit(){
    
  }

  onLogin(data: any){

    // this.userData.getUsers().subscribe(res =>{
    //   let user = this.users.find((a: any) =>{
          
    //     return a.email === data.email && a.password === data.password
    //   });
    //   if(user){
    //     alert("Login Success!!")
    //     console.log(res);
    //     this.router.navigate(['admin/home']);
    //   } else{
    //     alert('User not found');
    //     window.location.reload()
    //   }
    // }, err=> { 
    //   console.log("Error", err)
    // })
   



    this.userData.login(data).subscribe(res =>{
      alert("Login Success!!")
      console.log(res);
      this.router.navigate(['admin/home']);
    })
  }

}
