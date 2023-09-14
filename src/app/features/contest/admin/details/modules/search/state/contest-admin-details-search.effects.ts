import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';

import { GetContestDetailsSearchStatisticsGQL } from 'src/app/features/contest/api/generated/get-contest-details-search-statistics.query.generated';
import { ContestAdminDetailsSearchActions } from './contest-admin-details-search.actions';
import { selectIntervalParam, selectPeriodParam, selectSlug } from './contest-admin-details-search.selectors';

@Injectable()
export class ContestAdminDetailsSearchEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ContestAdminDetailsSearchActions.init,
      ContestAdminDetailsSearchActions.updatePeriod,
      ContestAdminDetailsSearchActions.updateInterval,
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
    map(response => response.data.getContest?.id
      ? ContestAdminDetailsSearchActions.setSearchStatistics(response.data.getContest.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getSearchStatisticsService: GetContestDetailsSearchStatisticsGQL,
  ) {}
}
