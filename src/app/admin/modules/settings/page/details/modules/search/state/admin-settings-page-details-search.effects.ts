import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { GetPageDetailsSearchStatisticsGQL } from 'src/app/admin/api/generated/get-page-details-search-statistics.query.generated';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageDetailsSearchActions } from './admin-settings-page-details-search.actions';
import { selectParams, selectSlug } from './admin-settings-page-details-search.selectors';

@Injectable()
export class AdminSettingsPageDetailsSearchEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsPageDetailsSearchActions.setSlug,
      AdminSettingsPageDetailsSearchActions.updateParams,
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
    map(response => response.data.getPage?.id
      ? AdminSettingsPageDetailsSearchActions.setStatistics(response.data.getPage.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getSearchStatisticsService: GetPageDetailsSearchStatisticsGQL,
  ) {}
}
