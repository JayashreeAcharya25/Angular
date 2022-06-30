import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'
import { DataComponent } from './modules/admin/components/data/data.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [

  { 
    path:'admin', 
    loadChildren: () => 
    import('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  // { path:'', component: HomeComponent},
  // { path:'login', component: LoginComponent},
  // { path:'signup', component: SignupComponent},
  // { path:'data', component: DataComponent},
  // { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
