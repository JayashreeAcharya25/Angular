import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DataComponent } from './components/data/data.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { TodoComponent } from './components/todo/todo.component';
import { UsersComponent } from './components/users/users.component';
import { MailComponent } from './components/mail/mail.component';
import { BrandsComponent } from './components/brands/brands.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path:'', redirectTo: '/admin/home', pathMatch:'full'},
      { path:'home', component: HomeComponent},
      { path:'data', component: DataComponent},
      { path:'todo-list', component: TodoComponent},
      { path:'users', component: UsersComponent},
      { path:'products', component: ProductsComponent},
      { path:'mail', component: MailComponent},
      { path:'brands', component: BrandsComponent},
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
