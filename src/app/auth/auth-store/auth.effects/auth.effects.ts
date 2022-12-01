import { UserRegister } from './../../../core/model/interfaces';
import { Register } from './../auth.actions/auth.actions';
import { UserAuth, AccessToken } from '@core/model/interfaces';
import { Injectable } from "@angular/core";
import { AuthService } from '@core/services/auth.service';
import { createEffect, Actions, ofType, defaultEffectsErrorHandler } from '@ngrx/effects';
import { mergeMap, catchError, of, map, switchMap, tap, exhaustMap, concatMap, defer, EmptyError, EMPTY } from 'rxjs';
import * as AuthActions from '../auth.actions/auth.actions'
import { Router } from '@angular/router';
import { AlertsComponent } from '@shared/components/alerts/alerts.component';


@Injectable()
export class AuthEffects {
  sweetalert: AlertsComponent = new AlertsComponent


  LogIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LogIn),
      switchMap((action) => {
        return this.authService.login(action.user).pipe(
          map((user: UserAuth) => {
            return { type: AuthActions.LogIn.type, user }
          }),
          tap((user) => {

            this.route.navigate(['/banco/dashboard'])
          }),
          catchError((error) => {
            this.sweetalert.ErrorAlert()
            setTimeout(function(){
              window.location.reload();
           }, 2500);

            return of({ type: AuthActions.LogIn.type, error })

          })
        )
      })
      )
    },
    { dispatch: false }
  )

  Register$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.Register),
    concatMap((action: any) => {
      return this.authService.registro(action.user).pipe(
        map((user) => {
          return { type: AuthActions.Register, payload: user}
        }),
        tap(() => {
          return this.route.navigate(['/auth/login']);
        }),
        catchError((error) => {
          this.sweetalert.datosDuplicadosAlert()
          setTimeout(function(){
            window.location.reload();
         }, 2500);
          return of({ type: AuthActions.Register, payload: error});
        })
      )
    })
  )
  ,{ dispatch: false }
  )

  // Register$ = createEffect(() => {
  //   return this.actions$.pipe(
  //   ofType(AuthActions.Register),
  //   concatMap((action: any) => {
  //     return this.authService.registro(action.user).pipe(
  //       map((user: UserRegister) => {
  //         return { type: '[Register] Register Success', payload: user };
  //       }),
  //       tap(() => {
  //         return this.route.navigate(['/auth/login']);
  //       })
  //     )
  //   })
  // )}
  // )

  Logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.Logout),
      tap(() => {
        this.route.navigateByUrl('/auth/login')
        return this.authService.logout()
      })
    )
  },
  { dispatch: false }
  )


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private route: Router
  ) {}

}

