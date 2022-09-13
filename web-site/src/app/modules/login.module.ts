import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'site/components/login/login.component';

const routes = [
    {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgbModule
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
