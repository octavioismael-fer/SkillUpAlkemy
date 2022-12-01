import { UserRegister } from './../../core/model/interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { TerminosComponent } from './components/terminos/terminos.component';
import { AlertsComponent } from '../../shared/components/alerts/alerts.component';
import * as Auth from '../auth-store/auth.actions/auth.actions';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registerForm!: FormGroup;
  sweetalert: AlertsComponent = new AlertsComponent
  isSubmitted = false;
  resultado: boolean = false
  user: any;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private store: Store<any>,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: this.passwordMatch('password', 'confirmPassword')
    })
  }

  register() {
    this.isSubmitted = true;
    const user : UserRegister = {
      first_name: this.registerForm.value.first_name,
      last_name: this.registerForm.value.last_name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    }
    if (this.registerForm.valid && this.resultado === true) {
      this.store.dispatch(Auth.Register({ user }))
    } else {
            this.sweetalert.IncompletDataAlert()
            return
          }
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

  openDialog() {
    const dialogRef = this.dialog.open(TerminosComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.resultado = true
      } else {
        this.sweetalert.noAceptoAlert();
        this.router.navigate([''])
      }
    });
  }
}
