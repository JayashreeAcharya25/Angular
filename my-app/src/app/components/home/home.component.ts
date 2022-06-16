import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import AOS from 'aos'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private userData: SharedService) { }

  ngOnInit() {

    AOS.init();
    
    this.userData.getUsers().subscribe(res =>{
      console.log(res)
    })

  }

}
