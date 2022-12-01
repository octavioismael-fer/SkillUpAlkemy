import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'ab-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent {
  ifLoggedIn:boolean = false

//all routes

//current route variable
innerRoutes:string[]= []
currentRoute: string

  constructor(private router: Router) {
    this.ifLoggedIn = localStorage.getItem('user') ? true : false;
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd){
        this.currentRoute = event.url;
      }
      if(this.currentRoute == "/home"){
        this.currentRoute = ""
      }
      this.currentRoute = this.currentRoute.replace(/^\//, "").replace("banco", "Home")
      this.innerRoutes = this.currentRoute.split("/")



    });
  }

}
