import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseServicesService } from '@core/services/base-service';
import { AlertsComponent } from '@shared/components/alerts/alerts.component';
@Component({
  selector: 'ab-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  sweetalert: AlertsComponent = new AlertsComponent
  resetForm!: FormGroup;

  constructor(private base:BaseServicesService,
     private formBuilder: FormBuilder,
     private router:Router) { }

  ngOnInit(): void {

    this.resetForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: this.passwordMatch('password', 'confirmPassword')
    } )
}

passwordMatch(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[confirmPassword];

    if (matchingControl.errors && !matchingControl.errors['passwordMatch']) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ passwordMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}

  resetPassword(){
    const {password, userId} = this.resetForm.value
    if(this.resetForm.valid){
      this.base.resetPasswordById(userId, password).subscribe(data =>  {
        this.sweetalert.ResetSucces()
        setTimeout(() => {
          this.router.navigate(['auth/login'])
        }, 2000)
      })
    } else  {
      this.sweetalert.ErrorAlert()

    }

  }

}
