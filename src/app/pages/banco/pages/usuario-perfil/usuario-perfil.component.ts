import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { User } from '@core/model/interfaces';
import { Store } from '@ngrx/store';
import * as UserActions from '../../../../core/state/user-actions/userData.actions';
import * as UserSelectors from '../../../../core/state/user-selectors/userData.selectors';

@Component({
  selector: 'ab-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss'],
})
export class UsuarioPerfilComponent implements OnInit {

  userData$!: Observable<any>

  constructor( private store: Store<any>) {
    this.store.dispatch(UserActions.getUserData())

  }

  ngOnInit(): void {
    const userData$ = this.store.select(UserSelectors.dataUser)
  }



}

