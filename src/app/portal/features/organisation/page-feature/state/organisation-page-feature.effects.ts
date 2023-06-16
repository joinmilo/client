import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetOrganisationsGQL, OrganisationEntity } from 'src/schema/schema';
import { OrganisationPageFeatureActions } from './organisation-page-feature.actions';

@Injectable()
export class OrganisationPageFeatureEffects {

  getRecentOrganisations = createEffect(() => this.actions.pipe(
    ofType(OrganisationPageFeatureActions.getRecentOrganisations),
    switchMap(() => this.getOrganisationsService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
      }
     }).valueChanges),
    map(response => OrganisationPageFeatureActions.setRecentOrganisations(response.data.getOrganisations?.result as OrganisationEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getOrganisationsService: GetOrganisationsGQL,
  ) {}
}
