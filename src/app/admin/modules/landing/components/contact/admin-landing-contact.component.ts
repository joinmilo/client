import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdminLandingActions } from '../../state/admin-landing.actions';
import { selectDeveloperContact } from '../../state/admin-landing.selectors';

@Component({
  selector: 'app-admin-landing-contact',
  templateUrl: './admin-landing-contact.component.html',
  styleUrls: ['./admin-landing-contact.component.scss'],
})
export class AdminLandingContactComponent {

  public contact = this.store.select(selectDeveloperContact);

  constructor(
    private store: Store
  ) {
    this.store.dispatch(AdminLandingActions.getDeveloperContact(
      { name: 'codeschluss' }
    ));
  }

}
