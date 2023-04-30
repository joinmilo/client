import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { eventSlug } from '../../constants/event-details.constant';
import { PortalEventDetailsActions } from '../../state/portal-event-details.actions';
import { selectEventDetails } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details',
  templateUrl: './portal-event-details.component.html',
  styleUrls: ['./portal-event-details.component.scss']
})
export class PortalEventDetailsComponent implements OnInit {

  public eventDetails = this.store.select(selectEventDetails);

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.store.dispatch(PortalEventDetailsActions.getDetails(params[eventSlug]));
    });
  }
}
