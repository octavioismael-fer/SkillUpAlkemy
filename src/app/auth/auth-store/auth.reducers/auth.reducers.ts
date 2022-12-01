import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../auth.actions/auth.actions';


export const UserAuthStateKey = 'UserAuthState';
export interface UserAuthState {
  isLoggedIn: boolean,
  // token: []
}

export const initialUserState: UserAuthState = {
  isLoggedIn: false,
  // token: []
}

export const authReducers = createReducer (
  initialUserState,
  on(AuthActions.LogIn, AuthActions.browserReload, initialUserState => ({...initialUserState, isLoggedIn: true})),
  on(AuthActions.Logout, initialUserState => ({...initialUserState, isLoggedIn: false})),
  on(AuthActions.Register, initialUserState => ({...initialUserState, isLoggedIn: false}))
)

export const getAuthenticationToken = (state: UserAuthState) => state.isLoggedIn;
// export const getToken = (state: UserAuthState) => state.token;




