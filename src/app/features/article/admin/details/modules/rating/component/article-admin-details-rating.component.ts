import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { ArticleAdminDetailsRatingActions } from '../state/article-admin-details-rating.actions';
import { selectRatingStatistics } from '../state/article-admin-details-rating.selectors';

@Component({
  selector: 'app-article-admin-details-rating',
  templateUrl: './article-admin-details-rating.component.html',
  styleUrls: ['./article-admin-details-rating.component.scss']
})
export class ArticleAdminDetailsRatingComponent implements OnInit {
  
  public data = this.store.select(selectRatingStatistics);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.parent?.params.pipe(
      map(params => params[slug]),
      take(1)
    ).subscribe(slug => this.store.dispatch(ArticleAdminDetailsRatingActions.setSlug(slug)));
  }

  public updateParams(params: AnalyticsParams) {
    this.store.dispatch(ArticleAdminDetailsRatingActions.updateParams(params));
  }
}