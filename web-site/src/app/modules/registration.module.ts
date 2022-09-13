import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'site/components/login/login.component';
import { RegistrationComponent } from 'site/components/registration/registration.component';

const routes = [
    {path: '', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgbModule
  ],
  bootstrap: [RegistrationComponent]
})
export class RegistrationModule { }
