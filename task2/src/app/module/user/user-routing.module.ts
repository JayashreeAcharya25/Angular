import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
    {
      path: '',
      component: UserComponent,
      children: [
        { path:'', redirectTo: 'home', pathMatch:'full'},
        { path:'home', component: HomeComponent},
        { path:'signup', component: SignupComponent},
        { path:'login', component: LoginComponent},
       
      ]
    }
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }