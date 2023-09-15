import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetDealDetailsVisitorGQL } from 'src/app/features/deal/api/generated/get-deals-details-visitors.query.generated';
import { DealAdminDetailsVisitorsActions } from './deal-admin-details-visitors.actions';
import { selectParams, selectSlug } from './deal-admin-details-visitors.selectors';


@Injectable()
export class DealAdminDetailsVisitorsEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      DealAdminDetailsVisitorsActions.setSlug,
      DealAdminDetailsVisitorsActions.updateParams,
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
    map(response => response.data.getDeal?.id
      ? DealAdminDetailsVisitorsActions.setStatistics(response.data.getDeal.visitorStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getVisitorStatisticsService: GetDealDetailsVisitorGQL,
  ) { }
}
