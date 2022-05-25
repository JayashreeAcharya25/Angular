import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: any
  users: any
  data: any
  
  constructor( private userData: SharedService ) { }

  ngOnInit(): void {
    this.userData.getUsers().subscribe((data => {
      this.users = data;
      console.log(this.users);
    }))
  }

  deleteUser(id: any){
    this.userData.deleteUsers(id).subscribe(res=>{
      this.users = res
      alert("Users Deleted")
      console.log('Response', res)
    }, err => console.log('Error', err))
    console.log(id)
  }

  editUser(i: any){
    // this.userData.getCurrentUser(id).subscribe(res=>{
    //   this.users = 
    //   console.log('Current User', res)
    // }, err => console.log('Error', err))
      //console.log(id)
      this.users.setValue({
        id: i,
        username: this.users.username,
        email: this.users.email
      })
  }

  onUpdate(item: any){
    this.userData.updateUsers(item).subscribe((data => {
      this.users = data;
      console.log(this.users);
    }))
  }


}

