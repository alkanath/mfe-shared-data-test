import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthHostInterceptor implements HttpInterceptor {
    urlsToNotUse: Array<string>;


  constructor() {
    this.urlsToNotUse= [
      'accounts.google.com',
      'openidconnect.googleapis.com', 
      'static.mykaarma.com'
    ];
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = window.parent.localStorage.getItem("id_token");
    if (token) {
      console.log("Auth coming from parent host app");
        if (this.isValidRequestForInterceptor(request.url)) {
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`
              }
            });
          }
    }
    return next.handle(request).pipe(
      catchError(err => this.handleError(err))
    ) as Observable<HttpEvent<any>>;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else if (error.status === 401) {
      console.error('Unauthorized request:', error.error);
      window.localStorage.clear();
      window.location.replace(window.location.origin);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.message));
  }


  private isValidRequestForInterceptor(requestUrl: string): boolean {
    for (let i = 0; i < this.urlsToNotUse.length; i++) {
      if (requestUrl.includes(this.urlsToNotUse[i])) {
        return false;
      }
    }
    return true;
  }

}