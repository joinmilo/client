import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetSurveyDetailsSearchStatisticsGQL } from 'src/app/features/survey/api/generated/get-survey-details-search-statistics.query.generated';
import { SurveyAdminDetailsSearchActions } from './survey-admin-details-search.actions';
import { selectIntervalParam, selectPeriodParam, selectSlug } from './survey-admin-details-search.selectors';

@Injectable()
export class SurveyAdminDetailsSearchEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      SurveyAdminDetailsSearchActions.init,
      SurveyAdminDetailsSearchActions.updatePeriod,
      SurveyAdminDetailsSearchActions.updateInterval,
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
    map(response => response.data.getSurvey?.id
      ? SurveyAdminDetailsSearchActions.setSearchStatistics(response.data.getSurvey.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getSearchStatisticsService: GetSurveyDetailsSearchStatisticsGQL,
  ) {}
}
