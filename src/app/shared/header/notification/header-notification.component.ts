import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { portalUrl } from 'src/app/core/constants/core.constants';
import { CoreModule } from 'src/app/core/core.module';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { Maybe, NotificationEntity } from 'src/schema/schema';

@Component({
  selector: 'app-header-notification',
  templateUrl: './header-notification.component.html',
  styleUrls: ['./header-notification.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,

    FontAwesomeModule,
    MatBadgeModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,

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
}
