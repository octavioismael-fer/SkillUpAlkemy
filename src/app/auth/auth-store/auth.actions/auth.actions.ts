import { UserAuth, UserRegister } from './../../../core/model/interfaces';
import { createAction, props } from '@ngrx/store';


export const LogIn = createAction (
  '[LogIn] LogIn',
  props<{ user: UserAuth }>()
)

export const LogInFailure = createAction (
  '[LogIn] LogIn Failure',
  props<{ error: any }>()
)

export const Register = createAction (
  '[Register] Register',
  props<{user: UserRegister}>()
)

export const Logout = createAction ('[Logout] Logout Success')

export const browserReload = createAction(
  '[Core Component] Browser Reload',
  props<{user: UserAuth}>()
)


