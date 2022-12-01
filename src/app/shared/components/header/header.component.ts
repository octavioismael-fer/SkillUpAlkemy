import { Component, OnInit } from '@angular/core';

import { User } from '@core/model/interfaces';
import { BaseServicesService } from '@core/services/base-service';
import { navbarData } from '../navigation';
import { Store } from '@ngrx/store';
import * as Auth from '../../../auth/auth-store/auth.actions/auth.actions';
import * as Select from '../../../auth/auth-store/auth.selectors/auth.selectors';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@core/services/local-storage.service';


@Component({
  selector: 'ab-header',
  templateUrl: './header.component.html'
})


export class HeaderComponent implements OnInit {
  navbarData = navbarData;
  sidebarOpen: boolean = false;
  dataUsuario!: User;
  fullName!: string[]
  isLoggedIn$: Observable<any>;

  ngOnInit(): void {
    if(this.local.getToken(this.dataUsuario)) {
      this.usuario()
    } else {
      setTimeout(() => {
        this.usuario()
      }, 6000 * 50)
    }
  }


  constructor(
              private base: BaseServicesService,
              private store: Store<any>,
              private local: LocalStorageService
            )
  {
    this.isLoggedIn$ = this.store.select(Select.isLoggedSelector);
    this.dataUsuario = { id: 0, first_name: '', last_name: '', email: '', password: '', roleId: 0, points: 0 }

  }

  usuario() {
      this.base.getPerfil().subscribe(data => {
        this.dataUsuario = data
      })
  }

  logout() {
    this.store.dispatch(Auth.Logout())
  }

  showSideBar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
