import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetArticleDetailsSearchStatisticsGQL } from 'src/app/features/article/api/generated/get-article-details-search-statistics.query.generated';
import { ArticleAdminDetailsSearchActions } from './article-admin-details-search.actions';
import { selectParams, selectSlug } from './article-admin-details-search.selectors';

@Injectable()
export class ArticleAdminDetailsSearchEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      ArticleAdminDetailsSearchActions.setSlug,
      ArticleAdminDetailsSearchActions.updateParams,
    ),
    withLatestFrom(
      this.store.select(selectSlug),
      this.store.select(selectParams),
    ),
    filter(([, slug, params]) => !!slug && !!params),
    switchMap(([, slug, params]) => this.getSearchStatisticsService.watch({
      entity: { slug },
      startDate: params?.period?.startDate,
      endDate: params?.period?.endDate,
      interval: params?.interval,
    }).valueChanges),
    map(response => response.data.getArticle?.id
      ? ArticleAdminDetailsSearchActions.setStatistics(response.data.getArticle.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getSearchStatisticsService: GetArticleDetailsSearchStatisticsGQL,
  ) {}
}
