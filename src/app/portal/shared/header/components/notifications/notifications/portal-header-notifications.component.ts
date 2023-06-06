import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/core/state/core.selectors';

@Component({
  selector: 'app-portal-header-notifications',
  templateUrl: './portal-header-notifications.component.html',
  styleUrls: ['./portal-header-notifications.component.scss'],
})
export class PortalHeaderNotificationsComponent {
  public currentUser = this.store.select(selectCurrentUser);

  
  constructor(private store: Store) {}
}
