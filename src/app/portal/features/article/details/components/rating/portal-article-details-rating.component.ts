import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { PortalArticleDetailsActions } from '../../state/portal-article-details.actions';
import { selectArticleUserRating, selectCalculatedArticleRatings } from '../../state/portal-article-details.selectors';

@Component({
  selector: 'app-portal-article-details-rating',
  templateUrl: './portal-article-details-rating.component.html',
  styleUrls: ['./portal-article-details-rating.component.scss']
})
export class PortalArticleDetailsRatingComponent {

  public currentUserRating = this.store.select(selectArticleUserRating)
    .pipe(map(rating => rating?.score));

  public calculatedRatings = this.store.select(selectCalculatedArticleRatings);

  constructor(
    private router: Router,
    private store: Store) { }

  public saveRating(score: number): void {
    this.store.select(selectCurrentUser)
      .pipe(take(1))
      .subscribe(user => user?.id
        ? this.store.dispatch(PortalArticleDetailsActions.saveArticleRating({
            score,
          }))
        : this.router.navigate(['/user', 'login-required']))
  }
}