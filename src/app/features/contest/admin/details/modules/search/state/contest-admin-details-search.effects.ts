import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetContestDetailsSearchStatisticsGQL } from 'src/app/features/contest/api/generated/get-contest-details-search-statistics.query.generated';
import { ContestAdminDetailsSearchActions } from './contest-admin-details-search.actions';
import { selectParams, selectSlug } from './contest-admin-details-search.selectors';

@Injectable()
export class ContestAdminDetailsSearchEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      ContestAdminDetailsSearchActions.setSlug,
      ContestAdminDetailsSearchActions.updateParams,
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
    map(response => response.data.getContest?.id
      ? ContestAdminDetailsSearchActions.setStatistics(response.data.getContest.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getSearchStatisticsService: GetContestDetailsSearchStatisticsGQL,
  ) {}
}
