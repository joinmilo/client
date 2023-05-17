import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CoreActions } from '../state/core.actions';

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private store: Store,
  ) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.store.dispatch(CoreActions.setLoading(true));
    return next.handle(request)
      .pipe(
        finalize(() => this.store.dispatch(CoreActions.setLoading(false)))
      );
  }
}
