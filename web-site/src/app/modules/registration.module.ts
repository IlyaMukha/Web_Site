import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'site/components/login/login.component';
import { RegistrationComponent } from 'site/components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const routes = [
    {path: '', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    NgbModule
  ],
  bootstrap: [RegistrationComponent]
})
export class RegistrationModule { }
