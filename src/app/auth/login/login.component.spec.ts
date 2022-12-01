import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './../../material/material.module';

import { AuthService } from './../../core/services/auth.service';
import { LocalStorageService } from './../../core/services/local-storage.service';

import { LoginComponent } from './login.component';

describe (`(1) TEST del componente "LoginComponent"`, () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        MaterialModule,
        BrowserAnimationsModule,

      ],
      declarations: [
        LoginComponent

      ],
      providers: [
        AuthService,
        LocalStorageService,

      ]

    })
    .compileComponents();

  });

  it('Debe existir el LoginComponent', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance
    expect(component).toBeTruthy();
  })

  it('Debe retornar el formulario es invalido y un mensaje de error', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance
    fixture.detectChanges()

    const email = login.loginForm.controls['email'];
    email.setValue('aaron@aaron.com');

    expect(login.loginForm.invalid).toBeTrue();
  })

  it('Debe retornar usuario logueado', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance
    fixture.detectChanges()

    let email = login.loginForm.controls['email'];
    let password = login.loginForm.controls['password'];


    email.setValue('gaston2@example.com');
    password.setValue('123123');

    const btnSubmit = fixture.debugElement.query(By.css('#btn-login'));
    btnSubmit.nativeElement.click();



    expect(login.login).toBeTruthy();
  })

})
