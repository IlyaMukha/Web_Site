import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { RegistrationRequest } from 'site/models/request/registration-request';

@Component({
  selector: 'i-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public registrationForm: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    surname: new UntypedFormControl(''),
    patronymic: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
    password1: new UntypedFormControl(''),
    phoneNumber: new UntypedFormControl(''),
    sex: new UntypedFormControl(''),
    educationform: new UntypedFormControl(''),
    ispayd: new UntypedFormControl(''),
    groupnumber: new UntypedFormControl(''),
    DOB: new UntypedFormControl('')
  });
  public sexes:string[] = ["M", "W"]



  public registration(){
    if(this.registrationForm.valid &&  this.registrationForm.value['password'] ==  this.registrationForm.value['password1']){
      const request  = new RegistrationRequest(
        this.registrationForm.value['name'],
        this.registrationForm.value['surname'],
        this.registrationForm.value['patronymic'],
        this.registrationForm.value['email'],
        this.registrationForm.value['password'],
        this.registrationForm.value['phoneNumber'],
        this.registrationForm.value['sex'],
        this.registrationForm.value['educationform'],
        this.registrationForm.value['ispayd'],
        this.registrationForm.value['groupnumber'],
        this.registrationForm.value['DOB']
      );
      console.log(request);
    }
  }
}
