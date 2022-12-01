import { ResetPasswordComponent } from './reset-password.component';
import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthService } from "@core/services/auth.service";
import { LocalStorageService } from "@core/services/local-storage.service";
import { MaterialModule } from "src/app/material/material.module";
import { By } from '@angular/platform-browser';




describe (`(1) TEST del componente "ResetPasswordComponent"`, () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
      declarations: [
       ResetPasswordComponent

      ],
      providers: [
        AuthService,
        LocalStorageService,
      ]

    })
    .compileComponents();

  });

  it('Debe existir el RegisterComponent', () => {
    const fixture = TestBed.createComponent(ResetPasswordComponent);
    const component = fixture.componentInstance
    expect(component).toBeTruthy();
  })

  it('Debe retornar el formulario es invalido y un mensaje de error', () => {
    const fixture = TestBed.createComponent(ResetPasswordComponent);
    const resetPassword = fixture.componentInstance
    fixture.detectChanges()

    let password = resetPassword.resetForm.controls['password'];
    password.setValue('123123')

    expect(resetPassword.resetForm.invalid).toBeTrue();
  })

 it('Debe retornar reseteo de contraseña realizado', () => {
    const fixture = TestBed.createComponent(ResetPasswordComponent);
    const resetPassword = fixture.componentInstance
    fixture.detectChanges()

    let userId = resetPassword.resetForm.controls['userId'];
    let password = resetPassword.resetForm.controls['password'];
    let confirmPassword = resetPassword.resetForm.controls['confirmPassword'];

    userId.setValue('1995');
    password.setValue('123123');
    confirmPassword.setValue('123123');


    const btnSubmit = fixture.debugElement.query(By.css('#btn-reset'));
    btnSubmit.nativeElement.click();


    expect(resetPassword.resetPassword).toBeTruthy();
  })

})
