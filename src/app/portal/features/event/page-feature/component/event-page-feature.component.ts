import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { EventPageFeatureActions } from '../state/event-page-feature.actions';
import { selectRecentEventsCards } from '../state/event-page-feature.selectors';

@Component({
  selector: 'app-event-page-feature',
  templateUrl: './event-page-feature.component.html',
  styleUrls: ['./event-page-feature.component.scss']
})
export class EventPageFeatureComponent {
  
  public events = this.store.select(selectRecentEventsCards).pipe(
    tap(result => !result?.length
      && this.store.dispatch(EventPageFeatureActions.getRecentEvents())));

  constructor(
    private store: Store, 
  ) { }

}
