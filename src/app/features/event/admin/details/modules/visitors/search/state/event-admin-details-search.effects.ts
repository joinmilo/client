import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetEventDetailsSearchStatisticsGQL } from 'src/app/features/event/api/generated/get-event-details-search-statistics.query.generated';
import { EventAdminDetailsSearchActions } from './event-admin-details-search.actions';
import { selectParams, selectSlug } from './event-admin-details-search.selectors';

@Injectable()
export class EventAdminDetailsSearchEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      EventAdminDetailsSearchActions.setSlug,
      EventAdminDetailsSearchActions.updateParams,
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
    map(response => response.data.getEvent?.id
      ? EventAdminDetailsSearchActions.setStatistics(response.data.getEvent.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getSearchStatisticsService: GetEventDetailsSearchStatisticsGQL,
  ) {}
}
