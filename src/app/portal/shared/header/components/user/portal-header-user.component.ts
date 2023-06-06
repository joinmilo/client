import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreActions } from 'src/app/core/state/core.actions';
import { selectCurrentUser } from 'src/app/core/state/core.selectors';

@Component({
  selector: 'app-portal-header-user',
  templateUrl: './portal-header-user.component.html',
  styleUrls: ['./portal-header-user.component.scss'],
})
export class PortalHeaderUserComponent {
  public currentUser = this.store.select(selectCurrentUser);

  public logout(): void{
    this.store.dispatch(CoreActions.logout())
  }

  constructor(private store: Store) {}
}