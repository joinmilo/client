import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetDealDetailsSearchStatisticsGQL } from 'src/app/features/deal/api/generated/get-deals-details-search-statistics.query.generated';
import { DealAdminDetailsSearchActions } from './deal-admin-details-search.actions';
import { selectParams, selectSlug } from './deal-admin-details-search.selectors';

@Injectable()
export class DealAdminDetailsSearchEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      DealAdminDetailsSearchActions.setSlug,
      DealAdminDetailsSearchActions.updateParams,
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
    map(response => response.data.getDeal?.id
      ? DealAdminDetailsSearchActions.setStatistics(response.data.getDeal.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getSearchStatisticsService: GetDealDetailsSearchStatisticsGQL,
  ) {}
}
