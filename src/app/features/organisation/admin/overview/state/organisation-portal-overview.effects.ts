import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { GetOrganisationsGQL, PageableList_OrganisationEntity } from 'src/schema/schema';
import { OrganisationAdminOverviewActions } from './organisation-admin-overview.actions';
import { selectParams } from './organisation-portal-overview.selectors';

@Injectable()
export class OrganisationAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminOverviewActions.updateParams),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.organisationsService.watch({
      params,
    }).valueChanges),
    map(response => OrganisationAdminOverviewActions.setOverviewData(response.data.getOrganisations as PageableList_OrganisationEntity))
  ));

  constructor(
    private actions: Actions,
    private organisationsService: GetOrganisationsGQL,
    private store: Store,
  ) {}
}
