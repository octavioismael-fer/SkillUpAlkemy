import { StateModule } from './core/state/state.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './auth/auth-store/auth.effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { authReducers } from './auth/auth-store/auth.reducers/auth.reducers';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from '@core/icons/icons.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './material/material.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InterceptorModule } from '@core/services/interceptors/interceptor-module';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { userDataReducers } from '@core/state/user-reducers/userData.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    IconsModule,
    InterceptorModule,
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forFeature( 'auth', authReducers),
    StoreModule.forRoot({UserAuthStateKey: userDataReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    //Modulo NGX-LOGGER
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
