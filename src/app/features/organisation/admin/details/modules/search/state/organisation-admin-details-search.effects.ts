import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetOrganisationDetailsSearchStatisticsGQL } from 'src/app/features/organisation/api/generated/get-organisation-details-search-statistics.query.generated';
import { OrganisationAdminDetailsSearchActions } from './organisation-admin-details-search.actions';
import { selectParams, selectSlug } from './organisation-admin-details-search.selectors';

@Injectable()
export class OrganisationAdminDetailsSearchEffects {

  retrieveStatistics = createEffect(() => this.actions.pipe(
    ofType(
      OrganisationAdminDetailsSearchActions.setSlug,
      OrganisationAdminDetailsSearchActions.updateParams,
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
    map(response => response.data.getOrganisation?.id
      ? OrganisationAdminDetailsSearchActions.setStatistics(response.data.getOrganisation.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private store: Store,
    private getSearchStatisticsService: GetOrganisationDetailsSearchStatisticsGQL,
  ) {}
}
