import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './_modules/auth/auth.component';
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
    path: 'courses', component: CoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
