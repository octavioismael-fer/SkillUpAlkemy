import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserAuth } from '@core/model/interfaces';
import { AlertsComponent } from '../../shared/components/alerts/alerts.component';
import * as Auth from '../auth-store/auth.actions/auth.actions';
import { Observable } from 'rxjs';
import * as Select from '../auth-store/auth.selectors/auth.selectors';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  checked: boolean = true;
  loading: boolean = false;
  sweetalert: AlertsComponent = new AlertsComponent;
  isLoggedIn$: Observable<any>;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder
    ) {
      this.isLoggedIn$ = this.store.select(Select.isLoggedSelector);
     }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login() {
    const user: UserAuth = this.loginForm.value;
    if(this.loginForm.valid) {
      this.loading = true;
      this.store.dispatch(Auth.LogIn({ user }));
    } else {
      this.sweetalert.IncompletDataAlert()
    }
  }
}

