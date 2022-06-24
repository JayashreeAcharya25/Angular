import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { BrandComponent } from './components/brand/brand.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'brand', component: BrandComponent},
  { path:'category', component: CategoryComponent},
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
