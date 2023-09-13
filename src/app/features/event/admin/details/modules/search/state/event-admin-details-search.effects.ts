import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetEventDetailsSearchStatisticsGQL } from 'src/app/features/event/api/generated/get-event-details-search-statistics.query.generated';
import { EventAdminDetailsSearchActions } from './event-admin-details-search.actions';
import { selectIntervalParam, selectPeriodParam, selectSlug } from './event-admin-details-search.selectors';

@Injectable()
export class EventAdminDetailsSearchEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      EventAdminDetailsSearchActions.init,
      EventAdminDetailsSearchActions.updatePeriod,
      EventAdminDetailsSearchActions.updateInterval,
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
    map(response => response.data.getEvent?.id
      ? EventAdminDetailsSearchActions.setSearchStatistics(response.data.getEvent.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private getSearchStatisticsService: GetEventDetailsSearchStatisticsGQL,
  ) {}
}
