import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEventDetails } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss'],
})
export class EventDescriptionComponent {
  public eventDetails = this.store.select(selectEventDetails);

  constructor(private store: Store) {}
}
