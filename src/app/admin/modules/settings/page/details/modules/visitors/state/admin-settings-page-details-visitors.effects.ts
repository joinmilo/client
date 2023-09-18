import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { GetPageDetailsVisitorGQL } from 'src/app/admin/api/generated/get-page-details-visitors.query.generated';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageDetailsVisitorsActions } from './admin-settings-page-details-visitors.actions';
import { selectParams, selectSlug } from './admin-settings-page-details-visitors.selectors';

@Injectable()
export class AdminSettingsPageDetailsVisitorsEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsPageDetailsVisitorsActions.setSlug,
      AdminSettingsPageDetailsVisitorsActions.updateParams,
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
    map(response => response.data.getPage?.id
      ? AdminSettingsPageDetailsVisitorsActions.setStatistics(response.data.getPage.visitorStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getVisitorStatisticsService: GetPageDetailsVisitorGQL,
  ) { }
}
