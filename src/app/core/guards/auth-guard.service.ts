import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'ngx-cinlib/security';
import { CoreUserActions } from '../state/actions/core-user.actions';


//TODO: replace with function isAuthenticated in privileges.utils.ts
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  
  public canActivate(): boolean {
    const isAuthenticated = !!this.authService.tokens?.access

    if (!isAuthenticated) {
      this.store.dispatch(CoreUserActions.requireLogin());
    }

    return isAuthenticated;
  }

  constructor(
    private authService: AuthService,
    private store: Store,
  ) {}
}