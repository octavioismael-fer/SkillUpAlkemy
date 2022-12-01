
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../../material/material.module';
import { LocalStorageService } from './../../core/services/local-storage.service';

import { AuthService } from './../../core/services/auth.service';
import { TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';


describe (`(1) TEST del componente "RegisterComponent"`, () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        MaterialModule,
        BrowserAnimationsModule

      ],
      declarations: [
        RegistroComponent,

      ],
      providers: [
        AuthService,
        LocalStorageService,
      ]

    })
    .compileComponents();


  });


  it('Debe existir el RegisterComponent', () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const component = fixture.componentInstance
    expect(component).toBeTruthy();
  })


  it('Debe retornar el formulario es invalido y un mensaje de error', () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const register = fixture.componentInstance
    fixture.detectChanges()

    const email = register.registerForm.controls['email'];
    email.setValue('aaron@aaron.com');

    expect(register.registerForm.invalid).toBeTrue();
  })

  it('Debe retornar usuario registrado', () => {
    const fixture = TestBed.createComponent(RegistroComponent);
    const register = fixture.componentInstance
    fixture.detectChanges()

    let first_name = register.registerForm.controls['first_name'];
    let last_name = register.registerForm.controls['last_name'];
    let email = register.registerForm.controls['email'];
    let password = register.registerForm.controls['password'];
    let confirmPassword = register.registerForm.controls['confirmPassword'];

    first_name.setValue('Gaston');
    last_name.setValue('Gaitan');
    email.setValue('gaston4@example.com');
    password.setValue('123123');
    confirmPassword.setValue('123123');

    const btnSubmit = fixture.debugElement.query(By.css('#btn-register'));
    btnSubmit.nativeElement.click();


    expect(register.isSubmitted).toBeTrue();
  })

})
