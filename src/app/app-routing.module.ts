import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './_modules/auth/auth.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
    
  },
  {
    path: 'login', component: AuthComponent
  },
  {
    path: 'signup', component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
