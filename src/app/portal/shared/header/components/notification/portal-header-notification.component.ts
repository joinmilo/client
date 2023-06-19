import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectCurrentUser } from 'src/app/core/state/core.selectors';
import { Maybe, NotificationEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-header-notification',
  templateUrl: './portal-header-notification.component.html',
  styleUrls: ['./portal-header-notification.component.scss'],
})
export class PortalHeaderNotificationComponent implements OnInit, OnDestroy {
  
  public notifications?: Maybe<Maybe<NotificationEntity>[]>;

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
