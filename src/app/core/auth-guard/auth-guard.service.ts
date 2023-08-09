import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { CoreUserActions } from '../state/actions/core-user.actions';
import { selectCurrentUser } from '../state/selectors/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  
  canActivate(): Observable<boolean> {
    return this.store.select(selectCurrentUser).pipe(
      map(currentUser => {
        if (!currentUser) {
          this.store.dispatch(CoreUserActions.requireLogin());
        }
        return true;
      })
    );
  }

  constructor(
    private store: Store, 
    ) {}
}