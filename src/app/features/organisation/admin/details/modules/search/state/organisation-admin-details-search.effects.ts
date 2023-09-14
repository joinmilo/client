import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { AnalyticsDto } from 'src/app/core/api/generated/schema';
import { GetOrganisationDetailsSearchStatisticsGQL } from 'src/app/features/organisation/api/generated/get-event-details-search-statistics.query.generated';
import { OrganisationAdminDetailsSearchActions } from './organisation-admin-details-search.actions';
import { selectIntervalParam, selectPeriodParam, selectSlug } from './organisation-admin-details-search.selectors';

@Injectable()
export class OrganisationAdminDetailsSearchEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      OrganisationAdminDetailsSearchActions.init,
      OrganisationAdminDetailsSearchActions.updatePeriod,
      OrganisationAdminDetailsSearchActions.updateInterval,
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
    map(response => response.data.getOrganisation?.id
      ? OrganisationAdminDetailsSearchActions.setSearchStatistics(response.data.getOrganisation.searchStatistics as AnalyticsDto[])
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private getSearchStatisticsService: GetOrganisationDetailsSearchStatisticsGQL,
  ) {}
}
