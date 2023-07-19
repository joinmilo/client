import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { PortalOrganisationDetailsActions } from '../../state/portal-organisation-details.actions';
import { selectCalculatedOrganisationRatings, selectOrganisationUserRating } from '../../state/portal-organisation-details.selectors';

@Component({
  selector: 'app-portal-organisation-details-rating',
  templateUrl: './portal-organisation-details-rating.component.html',
  styleUrls: ['./portal-organisation-details-rating.component.scss']
})
export class PortalOrganisationDetailsRatingComponent {

  public currentUserRating = this.store.select(selectOrganisationUserRating)
    .pipe(map(rating => rating?.score));

  public calculatedRatings = this.store.select(selectCalculatedOrganisationRatings);

  constructor(
    private store: Store) { }

  public saveRating(score: number): void {
    this.store.dispatch(PortalOrganisationDetailsActions.saveOrganisationRating({
      score,
    }));
  }
}