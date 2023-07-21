import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { userUrl } from 'src/app/core/constants/core.constants';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { selectIsAuthenticated } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-portal-header-user',
  templateUrl: './portal-header-user.component.html',
  styleUrls: ['./portal-header-user.component.scss'],
})
export class PortalHeaderUserComponent {

  constructor(
    private router: Router,
    private store: Store) { }

  public route(route?: string): void {
    this.store.select(selectIsAuthenticated)
      .pipe(take(1))
      .subscribe(isAuthenticated => isAuthenticated
        ? this.router.navigate([userUrl, route])
        : this.store.dispatch(CoreUserActions.requireLogin()));
  }

  public logout(): void {
    this.store.dispatch(CoreUserActions.logout());
    this.router.navigate(['/']);
  }
}