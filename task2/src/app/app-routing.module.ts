import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {
    path:'admin', 
    loadChildren: () => 
    import('./module/admin/admin.module').then((m) => m.AdminModule)
  },
  { path:'', component: HomeComponent},
  { path:'signup', component: SignupComponent},
  { path:'login', component: LoginComponent},
];

// { path:'', 
// component: HomeComponent, 
// children: [
//   { path: '', redirectTo: '/dashboard/home', pathMatch: 'full'},
//   { path:'home', component: HomeComponent},
//   { path:'category', component: CategoryComponent}
// ]},

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
