
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()

export class Interceptor implements HttpInterceptor {

  constructor() {}

  private applyCredentials = (req: HttpRequest<any>) => {
    return req.clone({
      withCredentials: true
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = this.applyCredentials(req);
    return next.handle(authReq);
   }
}