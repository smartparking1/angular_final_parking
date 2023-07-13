import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {
    const idToken1 = localStorage.getItem("token");
    console.log(idToken1)
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const idToken = localStorage.getItem("token");
    console.log(idToken)
    if (idToken) {
        request = request.clone(
          {headers: request.headers.set("Authorization","Bearer " + idToken)
        }
        );

        return next.handle(request);
    }
    else {
        return next.handle(request);
    }

  }
}
