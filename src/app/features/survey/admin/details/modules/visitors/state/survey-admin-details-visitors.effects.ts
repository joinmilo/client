import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetSurveyDetailsVisitorGQL } from 'src/app/features/survey/api/generated/get-event-details-visitors.query.generated';
import { SurveyAdminDetailsVisitorsActions } from './survey-admin-details-visitors.actions';
import { selectParams, selectSlug } from './survey-admin-details-visitors.selectors';

@Injectable()
export class SurveyAdminDetailsVisitorsEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      SurveyAdminDetailsVisitorsActions.setSlug,
      SurveyAdminDetailsVisitorsActions.updateParams,
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
    map(response => response.data.getSurvey?.id
      ? SurveyAdminDetailsVisitorsActions.setStatistics(response.data.getSurvey.visitorStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getVisitorStatisticsService: GetSurveyDetailsVisitorGQL,
  ) { }
}
