import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('../modules/login.module').then(m => m.LoginModule)},
  {path: 'registration', loadChildren: () => import('../modules/registration.module').then(m => m.RegistrationModule)},
  {path: 'home', loadChildren: () => import('../modules/home.module').then(m => m.HomeModule)},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
