import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { AuthService } from 'ngx-cinlib/security';
import { Subject, takeUntil } from 'rxjs';
import { userUrl } from 'src/app/core/constants/module.constants';
import { CoreModule } from 'src/app/core/core.module';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { selectIsAuthenticated } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    IconComponent,
    I18nDirective,
    MatButtonModule,
    MatMenuModule,
  ]
})
export class HeaderUserComponent implements OnDestroy {

  public isAuthenticated?: boolean;

  private destroy = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store) {
    this.store.select(selectIsAuthenticated)
      .pipe(takeUntil(this.destroy))
      .subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
    }

  public route(route?: string): void {
    this.isAuthenticated
      ? this.router.navigate([userUrl, route])
      : this.store.dispatch(CoreUserActions.requireLogin());
  }

  public logout(): void {
    this.authService.clear();
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}