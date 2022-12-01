import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'ab-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

  constructor() { }

  SuccessAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Haz ingresado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }


  ResetSucces(){
    Swal.fire({
      icon: 'success',
      title: 'Se ha reseteado tu contraseña correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ErrorAlert() {
    Swal.fire({
      title: 'Error!',
      text: 'Datos incorrectos',
      icon: 'error',
      confirmButtonText: 'Reintentar'
    })
  }

  IncompletDataAlert() {
    Swal.fire({
      title: 'Información!',
      text: 'Por favor rellene todos los campos',
      icon: 'info',
      confirmButtonText: 'Reintentar'
    })
  }

  noAceptoAlert() {
    Swal.fire({
      title: '¡Que pena!',
      text: 'Esperamos volver a verte',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
  }
  datosDuplicadosAlert(){
    Swal.fire({
      title: '¡Error!',
      text: 'Ya existe una cuenta con este email',
      icon: 'error',
      confirmButtonText: 'Volver'
    })
  }
}
