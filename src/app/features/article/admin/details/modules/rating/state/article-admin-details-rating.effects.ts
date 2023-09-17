import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetArticleDetailsRatingGQL } from 'src/app/features/article/api/generated/get-articles-details-rating.query.generated';
import { ArticleAdminDetailsRatingActions } from './article-admin-details-rating.actions';
import { selectParams, selectSlug } from './article-admin-details-rating.selectors';

@Injectable()
export class ArticleAdminDetailsRatingEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      ArticleAdminDetailsRatingActions.setSlug,
      ArticleAdminDetailsRatingActions.updateParams,
    ),
    withLatestFrom(
      this.store.select(selectSlug),
      this.store.select(selectParams),
    ),
    filter(([, slug, params]) => !!slug && !!params),
    switchMap(([, slug, params]) => this.getRatingStatisticsService.watch({
      entity: { slug },
      startDate: params?.period?.startDate,
      endDate: params?.period?.endDate,
      interval: params?.interval,
    }).valueChanges),
    map(response => response.data.getArticle?.id
      ? ArticleAdminDetailsRatingActions.setStatistics(response.data.getArticle.ratingStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getRatingStatisticsService: GetArticleDetailsRatingGQL,
  ) { }
}
