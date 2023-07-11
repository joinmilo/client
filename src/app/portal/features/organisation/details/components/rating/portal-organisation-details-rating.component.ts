import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
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
    private router: Router,
    private store: Store) { }

  public saveRating(score: number): void {
    this.store.select(selectCurrentUser)
      .pipe(take(1))
      .subscribe(user => user?.id
        ? this.store.dispatch(PortalOrganisationDetailsActions.saveOrganisationRating({
            score,
          }))
        : this.router.navigate(['/user', 'login-required']))
  }
}