import { User } from '@core/model/interfaces';
import { createAction, props } from '@ngrx/store';

export const loadUserDataSuccess = createAction (
  '[User Data API] Data Success',
  props<{ user: User[] }>()
)
