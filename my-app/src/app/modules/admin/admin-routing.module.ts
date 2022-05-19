import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DataComponent } from './components/data/data.component';
import { HomeComponent } from './components/home/home.component';
import { TodoComponent } from './components/todo/todo.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path:'', redirectTo: '/admin/home', pathMatch:'full'},
      { path:'home', component: HomeComponent},
      { path:'data', component: DataComponent},
      { path:'todo-list', component: TodoComponent},
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
