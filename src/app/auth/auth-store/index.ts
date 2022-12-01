
import { ActionReducer, ActionReducerMap, MetaReducer   } from '@ngrx/store';
import * as AuthActions from '../auth-store/auth.actions/auth.actions';
import * as AuthReducers from '../auth-store/auth.reducers/auth.reducers';
import * as AuthEffects from '../auth-store/auth.effects/auth.effects';
import * as AuthSelect from '../auth-store/auth.selectors/auth.selectors';
import { environment } from '@env/environment';

export interface AppState {
  [AuthReducers.UserAuthStateKey]: AuthReducers.UserAuthState
}

  export const reducers: ActionReducerMap<AppState> = {
    [AuthReducers.UserAuthStateKey]: AuthReducers.authReducers
  }

  export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [debug]
  : [];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
