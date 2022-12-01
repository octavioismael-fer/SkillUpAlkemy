import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { LocalStorageService } from '../local-storage.service';



@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  user: any;

  constructor(private authSVC: AuthService,
    private local:LocalStorageService) {}

  intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const currentUser = this.authSVC.userAuth;
      // const isAuthenticated = currentUser && currentUser.user;

      const data = this.local.getToken(this.user)
      if(data) {
        // req = req.clone({
        //   setHeaders: {
        //     Autorization: `Bearer ${data}`
        //   }
        // });
        req = req.clone({
          headers: req.headers.set('Authorization',
                    'Bearer ' + data)
        })
        console.log("Token interceptor", data);
      }
      return next.handle(req);
  }

}
