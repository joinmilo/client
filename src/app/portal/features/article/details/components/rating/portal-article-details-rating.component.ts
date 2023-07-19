import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
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
    private store: Store) { }

  public saveRating(score: number): void {
    this.store.dispatch(PortalArticleDetailsActions.saveArticleRating({
      score,
    }));
  }
}