import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, tap } from 'rxjs';
import { navigatorFeatureKey } from 'src/app/core/constants/feature.constants';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { navigatorQuestionsUrl } from '../constants/navigator-questions.constant';
import { selectNavigatorStateInputs } from '../state/navigator-portal-questions.selectors';

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
          this.router.navigate([portalUrl, navigatorFeatureKey, navigatorQuestionsUrl]);
        }
      })
    );
  }
}