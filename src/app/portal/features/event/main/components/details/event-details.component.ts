import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { eventSlug } from '../../constants/event.constant';
import { EventActions } from '../../state/event.actions';
import { selectEventDetails } from '../../state/event.selectors';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  public eventDetails = this.store.select(selectEventDetails);

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.store.dispatch(EventActions.getEventDetails(params[eventSlug]));
    });
  }
}
