import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EventPageFeatureActions } from '../state/event-page-feature.actions';
import { selectRecentEvents } from '../state/event-page-feature.selectors';

@Component({
  selector: 'app-event-page-feature',
  templateUrl: './event-page-feature.component.html',
  styleUrls: ['./event-page-feature.component.scss']
})
export class EventPageFeatureComponent {
  
  public events = this.store.select(selectRecentEvents);

  constructor(
    private store: Store, 
  ) {
    this.store.dispatch(EventPageFeatureActions.getRecentEvents());
  }

}
