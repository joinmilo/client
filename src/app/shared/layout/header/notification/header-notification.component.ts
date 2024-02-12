import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { I18nDirective } from 'ngx-cinlib/i18n';
import { IconComponent } from 'ngx-cinlib/icons';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, NotificationEntity } from 'src/app/core/api/generated/schema';
import { portalUrl } from 'src/app/core/constants/module.constants';
import { CoreModule } from 'src/app/core/core.module';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-header-notification',
  templateUrl: './header-notification.component.html',
  styleUrls: ['./header-notification.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    IconComponent,
    I18nDirective,
    MatBadgeModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    RouterModule,
  ]
})
export class HeaderNotificationComponent implements OnInit, OnDestroy {
  
  public notifications?: Maybe<Maybe<NotificationEntity>[]>;

  public portalUrl = portalUrl;

  private destroy = new Subject<void>(); 
  
  constructor(
    private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectCurrentUser)
      .pipe(takeUntil(this.destroy))
      .subscribe(userContext => 
        this.notifications = userContext?.user?.notifications
          ?.filter(notification => !notification?.read)
      ); 
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  public images = { path: 'assets/under_construction.svg' }
  
}
