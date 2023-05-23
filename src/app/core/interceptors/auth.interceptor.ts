import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ApiResponse } from '../typings/response';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.authService.tokens?.access
        ? request.clone({ headers: request.headers.set('Authorization', `Bearer ${this.authService.tokens?.access}`)})
        : request
      ).pipe(
        switchMap((response: HttpEvent<ApiResponse>) => this.handleRefresh(request, next, response)),
      )
  }

  private handleRefresh(
      request: HttpRequest<unknown>,
      next: HttpHandler,
      response: HttpEvent<ApiResponse>): Observable<HttpEvent<ApiResponse>> {
    return response instanceof HttpResponse<ApiResponse> 
        && response.body?.errors?.find(error => error.extensions.exception === 'AccessDeniedException')
      ? this.authService.refresh().pipe(
          switchMap(() => next.handle(request.clone({
            headers: request.headers.set('Authorization', `Bearer ${this.authService.tokens?.access}`)
          }))),
        )
      : of(response);
  }

}
