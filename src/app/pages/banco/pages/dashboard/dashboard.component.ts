import { Component, OnInit } from '@angular/core';
import { User } from '@core/model/interfaces';
import { BaseServicesService } from '@core/services/base-service';

@Component({
  selector: 'ab-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  dataUsuario!:User;

  constructor(private baseService:BaseServicesService){

  }

  ngOnInit(): void {
    this.baseService.getPerfil().subscribe(data => {
      this.dataUsuario = data

    })
  }



}
