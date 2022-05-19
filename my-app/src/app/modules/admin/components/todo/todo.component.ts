import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  List: any[] = [];
  filterName!: string;
  constructor() { }

  ngOnInit(): void {
    
  }

  onAddItem(item: string){
    this.List.push({id: this.List.length, name:item})
    console.log(item);
    
  }

  onDelete(id:number){
    this.List = this.List.filter(item => item.id!==id)
  }

}
