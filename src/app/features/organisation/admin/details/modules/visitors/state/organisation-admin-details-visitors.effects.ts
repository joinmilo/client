import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetOrganisationDetailsVisitorGQL } from 'src/app/features/organisation/api/generated/get-organisation-details-visitors.query.generated';
import { OrganisationAdminDetailsVisitorsActions } from './organisation-admin-details-visitors.actions';
import { selectParams, selectSlug } from './organisation-admin-details-visitors.selectors';

@Injectable()
export class OrganisationAdminDetailsVisitorsEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      OrganisationAdminDetailsVisitorsActions.setSlug,
      OrganisationAdminDetailsVisitorsActions.updateParams,
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
    map(response => response.data.getOrganisation?.id
      ? OrganisationAdminDetailsVisitorsActions.setStatistics(response.data.getOrganisation.visitorStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getVisitorStatisticsService: GetOrganisationDetailsVisitorGQL,
  ) { }
}
