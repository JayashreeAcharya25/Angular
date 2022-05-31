import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any;

  constructor(private userData: SharedService) {
    
   }

  ngOnInit(): void {

    this.userData.getUsers().subscribe((res => {
      this.users = res;
      console.log(res);
    }))

  }

}
