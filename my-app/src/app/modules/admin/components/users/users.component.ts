import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from './users.model'
import * as JsonData from './data.json'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  formValue!: FormGroup;
  userModelObj : UserModel = new UserModel();

  users: any;

  jsonData: any = (JsonData as any).default;
  
  constructor( private userData: SharedService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.userData.getUsers().subscribe((data => {
      this.users = data;
      console.log(this.users);
    }))

    this.formValue = this.formBuilder.group({
      username: [''],
      email: [''],
      password: ['']
    })

    console.log(this.jsonData)
  }

  deleteUser(id: any){
    this.userData.deleteUsers(id).subscribe(res=>{
      this.users = res
      alert("Users Deleted")
      console.log('Response', res)
    }, err => console.log('Error', err))
    console.log(id)
  }

  editUser(row: any){
    this.userModelObj.id = row.id;
    console.log(row.id)

    this.formValue.controls['username'].setValue(row.username)
    this.formValue.controls['email'].setValue(row.email)
    this.formValue.controls['password'].setValue(row.password)
    // this.userData.getCurrentUser(id).subscribe(res=>{
  }

  onUpdate(){
    console.log('------ Before ------')
    console.log(this.formValue.value)
    this.userModelObj.username = this.formValue.value.username
    this.userModelObj.email = this.formValue.value.email
    this.userModelObj.password = this.formValue.value.password
    
    var val ={
      id: this.userModelObj.id,
      username : this.userModelObj.username,
      email: this.userModelObj.email,
      password: this.userModelObj.password
    }
  
    this.userData.updateUsers(val)
    .subscribe(res =>{
      console.log(res);
      alert("Updated Successfully")
    }, err => console.log('Error', err))
    
  }

  sendJsonData(){
    this.userData.sendData(this.jsonData).subscribe(res=>{
      console.log('Response', res)
    }, err=> console.log('Error', err))
  }


}

