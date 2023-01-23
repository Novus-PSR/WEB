import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './_modules/auth/auth.component';
import { DashboardComponent } from './_modules/dashboard/dashboard.component';
import { CoursesComponent } from './_modules/courses/courses.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
    
  },
  {
    path: 'login', component: AuthComponent
  },
  {
    path: 'signup', component: AuthComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'courses', component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
