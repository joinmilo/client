import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetArticleDetailsSearchStatisticsGQL } from 'src/app/features/article/api/generated/get-article-details-search-statistics.query.generated';
import { ArticleAdminDetailsSearchActions } from './article-admin-details-search.actions';
import { selectIntervalParam, selectPeriodParam, selectSlug } from './article-admin-details-search.selectors';

@Injectable()
export class ArticleAdminDetailsSearchEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ArticleAdminDetailsSearchActions.init,
      ArticleAdminDetailsSearchActions.updatePeriod,
      ArticleAdminDetailsSearchActions.updateInterval,
    ),
    withLatestFrom(
      this.store.select(selectSlug),
      this.store.select(selectPeriodParam),
      this.store.select(selectIntervalParam)
    ),
    switchMap(([, slug, period, interval]) => this.getSearchStatisticsService.watch({
      entity: { slug },
      startDate: period?.startDate,
      endDate: period?.endDate,
      interval: interval,
    }).valueChanges),
    map(response => response.data.getArticle?.id
      ? ArticleAdminDetailsSearchActions.setSearchStatistics(response.data.getArticle.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private getSearchStatisticsService: GetArticleDetailsSearchStatisticsGQL,
  ) {}
}
