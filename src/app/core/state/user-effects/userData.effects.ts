import { BaseServicesService } from '@core/services/base-service';
import { UserDataService } from '../../services/user-data.service';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { getUserData } from "../user-actions/userData.actions";
import { exhaustMap, catchError, EmptyError, map, of, EMPTY, concatMap } from 'rxjs';
import { UserDataActions, UserDataAPI } from '..';
import { User } from '@core/model/interfaces';

@Injectable()
export class UserEffects {

  LoadUserData$ = createEffect (() => {
    return this.action$.pipe(
      ofType(getUserData),
      concatMap((action: any) => {
        return this.base.getPerfil().pipe(
          map((user: User) => {
            return UserDataAPI.loadUserDataSuccess(action.user),
            catchError( error => of( error))

          })
        )
      })
    )
  },
  {dispatch: false})



  constructor( private action$: Actions, private base: BaseServicesService) {}


}
