import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetArticleDetailsVisitorGQL } from 'src/app/features/article/api/generated/get-article-details-visitors.query.generated';
import { ArticleAdminDetailsVisitorsActions } from './article-admin-details-visitors.actions';
import { selectParams, selectSlug } from './article-admin-details-visitors.selectors';

@Injectable()
export class ArticleAdminDetailsVisitorsEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      ArticleAdminDetailsVisitorsActions.setSlug,
      ArticleAdminDetailsVisitorsActions.updateParams,
    ),
    withLatestFrom(
      this.store.select(selectSlug),
      this.store.select(selectParams),
    ),
    filter(([, slug, params]) => !!slug && !!params),
    switchMap(([, slug, params]) => this.getVisitorStatisticsService.watch({
      entity: { slug },
      startDate: params?.period?.startDate,
      endDate: params?.period?.endDate,
      interval: params?.interval,
    }).valueChanges),
    map(response => response.data.getArticle?.id
      ? ArticleAdminDetailsVisitorsActions.setStatistics(response.data.getArticle.visitorStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getVisitorStatisticsService: GetArticleDetailsVisitorGQL,
  ) { }
}
