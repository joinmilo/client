import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreActions } from 'src/app/core/state/core.actions';
import { selectNotifications, selectSavedNotification } from 'src/app/core/state/core.selectors';
import { Maybe, NotificationEntity } from 'src/schema/schema';

@Component({
  selector: 'app-portal-header-notifications-dropdown',
  templateUrl: './portal-header-notifications-dropdown.component.html',
  styleUrls: ['./portal-header-notifications-dropdown.component.scss'],
})
export class PortalHeaderNotificationsDropdownComponent {

  public notifications?: Maybe<NotificationEntity[]>;

  public savedNotification = this.store.select(selectSavedNotification);

  @Input()
  public link?: string[];

  constructor(private store: Store) {
    this.store.select(selectNotifications)
      .subscribe(notifactions => this.notifications = notifactions)
  }

  saveNotifications() {
    this.store.dispatch(
      CoreActions.saveNotifications(
        this.notifications?.map((notifictation) => ({
          ...notifictation,
          read: true,
        }))
      )
    );
  }
}
