import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetSurveyDetailsSearchStatisticsGQL } from 'src/app/features/survey/api/generated/get-survey-details-search-statistics.query.generated';
import { SurveyAdminDetailsSearchActions } from './survey-admin-details-search.actions';
import { selectParams, selectSlug } from './survey-admin-details-search.selectors';

@Injectable()
export class SurveyAdminDetailsSearchEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      SurveyAdminDetailsSearchActions.setSlug,
      SurveyAdminDetailsSearchActions.updateParams,
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
    map(response => response.data.getSurvey?.id
      ? SurveyAdminDetailsSearchActions.setStatistics(response.data.getSurvey.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getSearchStatisticsService: GetSurveyDetailsSearchStatisticsGQL,
  ) {}
}
