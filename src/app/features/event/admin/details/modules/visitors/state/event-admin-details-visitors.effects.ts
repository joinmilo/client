import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetEventDetailsVisitorGQL } from 'src/app/features/event/api/generated/get-event-details-visitors.query.generated';
import { EventAdminDetailsVisitorsActions } from './event-admin-details-visitors.actions';
import { selectIntervalParam, selectPeriodParam, selectSlug } from './event-admin-details-visitors.selectors';

@Injectable()
export class EventAdminDetailsVisitorsEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      EventAdminDetailsVisitorsActions.init,
      EventAdminDetailsVisitorsActions.updatePeriod,
      EventAdminDetailsVisitorsActions.updateInterval,
    ),
    withLatestFrom(
      this.store.select(selectSlug),
      this.store.select(selectPeriodParam),
      this.store.select(selectIntervalParam)
    ),
    switchMap(([, slug, period, interval]) => this.getVisitorStatisticsService.watch({
      entity: { slug },
      startDate: period?.startDate,
      endDate: period?.endDate,
      interval: interval,
    }).valueChanges),
    map(response => response.data.getEvent?.id
      ? EventAdminDetailsVisitorsActions.setStatistics(response.data.getEvent.visitorStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getVisitorStatisticsService: GetEventDetailsVisitorGQL,
  ) { }
}
