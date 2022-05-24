import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any
  
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



}
