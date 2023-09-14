import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetDealDetailsSearchStatisticsGQL } from 'src/app/features/deal/api/generated/get-deals-details-search-statistics.query.generated';
import { DealAdminDetailsSearchActions } from './deal-admin-details-search.actions';
import { selectIntervalParam, selectPeriodParam, selectSlug } from './deal-admin-details-search.selectors';

@Injectable()
export class DealAdminDetailsSearchEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      DealAdminDetailsSearchActions.init,
      DealAdminDetailsSearchActions.updatePeriod,
      DealAdminDetailsSearchActions.updateInterval,
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
    map(response => response.data.getDeal?.id
      ? DealAdminDetailsSearchActions.setSearchStatistics(response.data.getDeal.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getSearchStatisticsService: GetDealDetailsSearchStatisticsGQL,
  ) {}
}
