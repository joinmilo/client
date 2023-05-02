import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { selectEventDetails } from '../../state/portal-event-details.selectors';


@Component({
  selector: 'app-event-card-detail',
  templateUrl: './event-card-detail.component.html',
  styleUrls: ['./event-card-detail.component.scss'],
})
export class EventCardDetailComponent {
  public eventDetails = this.store.select(selectEventDetails);

  constructor(private store: Store) {}

  sendEmail(email: Maybe<string>) {
    window.location.href = `mailto:${email}`;
  }
}
