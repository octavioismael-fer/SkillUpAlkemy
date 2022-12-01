import { initialUserState } from './../auth.reducers/auth.reducers';
import { createFeatureSelector, createSelector } from "@ngrx/store"

export interface initialUserState {
  isLoggedIn: boolean,
  // token: []
}

export const authFeatureSelector = createFeatureSelector<initialUserState>('auth')

export const isLoggedSelector = createSelector(
  authFeatureSelector,
  (authState: initialUserState): boolean => authState.isLoggedIn
)

// export const isAuthentication = createSelector(
//   authFeatureSelector,
//   (authState: AuthStateInterface): [] => authState.token
// );

