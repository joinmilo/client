/* eslint-disable no-fallthrough */
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { accessDeniedError, tokenExpiredError } from '../constants/error.constants';
import { CoreUserActions } from '../state/actions/core-user.actions';
import { CoreActions } from '../state/actions/core.actions';
import { ApiError, ApiResponse } from '../typings/response';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private store: Store,
  ) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
        tap((response: HttpEvent<ApiResponse>) => this.handleError(response)),
        catchError((response: HttpErrorResponse) => this.handleCritical(response)),
      );
  }

  private handleError(response: HttpEvent<ApiResponse>): void {
    if (response instanceof HttpResponse 
      && response?.body?.errors?.length
      && response.body?.errors?.every((error: ApiError) => error.extensions.exception !== accessDeniedError)) {

        if (response.body?.errors?.some((error: ApiError)  => error.extensions.exception === tokenExpiredError)) {
          this.store.dispatch(CoreUserActions.refreshExpired());
        }
        
        this.store.dispatch(CoreActions.setFeedback({
          type: FeedbackType.Error,
          labelMessage: response?.body?.errors[0].message,
          labelAction: 'tryAgain',
        }));
    }
  }

  private handleCritical(response: HttpErrorResponse): Observable<never> {
    this.store.dispatch(CoreActions.setFeedback({
      type: FeedbackType.Critical,
      labelMessage: response?.message,
      labelAction: 'criticalError',
    }));
    return EMPTY;
  }

}
