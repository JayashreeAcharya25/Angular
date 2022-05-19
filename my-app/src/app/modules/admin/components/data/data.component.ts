import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  users: any;
  filteredUsers: any;
  filterBy: any;

  constructor( private http:HttpClient ) { }

  ngOnInit() {

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      users => {
        this.users = users;
        this.filteredUsers = [...this.users];
        console.log(users);
      },
      error => { console.log(error); }
    );
  }

  filter() {
    this.filteredUsers = [...this.users.filter((user: { name: string | any[]; }) => user.name.includes(this.filterBy))];
  }

}
