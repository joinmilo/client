import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { PortalEventDetailsActions } from '../../state/portal-event-details.actions';
import { selectCalculatedEventRatings, selectEventUserRating } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details-rating',
  templateUrl: './portal-event-details-rating.component.html',
  styleUrls: ['./portal-event-details-rating.component.scss']
})
export class PortalEventDetailsRatingComponent {

  public currentUserRating = this.store.select(selectEventUserRating)
    .pipe(map(rating => rating?.score));

  public calculatedRatings = this.store.select(selectCalculatedEventRatings);

  constructor(
    private store: Store) { }

  public saveRating(score: number): void {
    this.store.dispatch(PortalEventDetailsActions.saveEventRating({
      score,
    }));
  }
}