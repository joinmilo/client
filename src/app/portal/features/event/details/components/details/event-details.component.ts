import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectEventDetails } from '../../state/event-details.selectors';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  public eventDetails = this.store.select(selectEventDetails);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.paramMap.subscribe(params => {
      // const slug = params[eventSlug];
      console.log('slug', params);
      // this.store.dispatch(PortalEventDetailsActions.getEventDetails(slug));
    });
  }

}
