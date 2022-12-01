
import { EffectsModule } from '@ngrx/effects';
import { userDataReducers } from '@core/state/user-reducers/userData.reducers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './user-effects/userData.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature( 'UserDataFeatureKey', userDataReducers),
  ]
})
export class StateModule { }
