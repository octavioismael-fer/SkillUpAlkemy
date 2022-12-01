import { browserReload } from './../../auth/auth-store/auth.actions/auth.actions';
import { AppState } from 'src/app/auth/auth-store';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private store: Store<AppState>) { }

  saveToken(token:string){
    localStorage.setItem('user', token)
  }

  getToken(user: any){
    if(localStorage.getItem("user") !== null){
     this.store.dispatch(browserReload({user}))
     const {accessToken} = JSON.parse(localStorage.getItem("user") as string)
     return accessToken
   }
  }

  removeToken(){
    localStorage.removeItem('user')
  }
}
