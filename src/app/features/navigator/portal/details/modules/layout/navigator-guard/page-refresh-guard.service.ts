import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, tap } from 'rxjs';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { selectNavigatorStateInputs } from '../state/navigator-portal-details-layout.selectors';

//TODO: replace with function isAuthenticated in privileges.utils.ts
@Injectable({
  providedIn: 'root'
})
export class NavigatorRefreshGuard {

  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectNavigatorStateInputs).pipe(
      map(inputs => inputs.length > 1),
      tap(canActivate => {
        if (!canActivate) {
          this.router.navigate([portalUrl, 'navigator', 'start']);
        }
      })
    );
  }
}