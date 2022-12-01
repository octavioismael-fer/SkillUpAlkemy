import { authReducers } from './../../auth/auth-store/auth.reducers/auth.reducers';
import { userDataReducers } from '@core/state/user-reducers/userData.reducers';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export * as UserActions from './user-actions/userData.actions';
export * as UserDataAPI from './user-api-actions/userData.api.actions';
export * as UserDataActions from './user-actions/userData.actions';
// export * from './user-effects/user.effects';



export interface State {
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

