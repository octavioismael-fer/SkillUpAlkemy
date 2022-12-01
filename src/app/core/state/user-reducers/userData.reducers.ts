

import { User } from '@core/model/interfaces';
import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap, createReducer, on } from "@ngrx/store";
import { UserDataAPI } from '..';
import * as UserData from '../user-actions/userData.actions';

export const UserDataFeatureKey = 'userData'


export interface UserReducers {
  userData: User[]
}

export const UserInitialState : UserReducers = {
 userData: []

}

export const userDataReducers = createReducer(
  UserInitialState,
  on(UserData.getUserData, (state): UserReducers => { return {...state}} ),
  on(UserDataAPI.loadUserDataSuccess, (state, action): UserReducers => { return {...state, userData: action.user}})
)
