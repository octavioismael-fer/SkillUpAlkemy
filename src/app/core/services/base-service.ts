import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/model/interfaces';
import { environment } from '@env/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServicesService {
  private baseApi = environment.apiBase
  private _usuario!:User


   get user(){
     return {...this._usuario}
   }

  constructor(private http: HttpClient) { }


  resetPasswordById(id: number, password: string) {
    const url = `${this.baseApi}/users/resetPassword/${id}`;
    return this.http.patch(url, { password });
  }

  getPerfil():Observable<User>{
    const url = `${this.baseApi}/auth/me`
    return this.http.get<User>(url)
  }
  getUsers():Observable<User[]>{
    const url = `${this.baseApi}/users`;
    return this.http.get<User[]>(url)
  }
  //  getUserId(id:number):Observable<User>{
  //    const url = `${this.baseApi}/users/${id}`
  //    return this.http.get<User>(url)
  //    .pipe(
  //     tap(
  //       resp => {
  //         this._usuario = {
  //           id:resp.id,
  //           first_name:resp.first_name,
  //           last_name:resp.last_name,
  //           email:resp.email,
  //           password:resp.password,
  //           roleId:resp.roleId,
  //           points:resp.points
  //         }
  //         console.log(this._usuario)
  //       }
  //     ),
  //     map(resp => resp)
  //    )

  //  }
  }
