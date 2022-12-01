import { Accounts } from '../../model/user.data';
import { createAction, props } from '@ngrx/store';
import { User } from '@core/model/interfaces';


export const getUserData = createAction('[User] Init');

export const getAccounts = createAction('[Account] Get Account Success',
  props<{user:User}>()
  );

