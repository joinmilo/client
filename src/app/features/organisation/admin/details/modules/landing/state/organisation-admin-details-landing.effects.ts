import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { OrganisationEntity } from 'src/app/core/api/generated/schema';
import { GetOrganisationDetailsGQL } from 'src/app/features/organisation/api/generated/get-organisation-details.query.generated';
import { OrganisationAdminDetailsLandingActions } from './organisation-admin-details-landing.actions';

@Injectable()
export class OrganisationAdminDetailsLandingEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminDetailsLandingActions.getDetails),
    switchMap((action) => this.getOrganisationService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getOrganisation?.id
      ? OrganisationAdminDetailsLandingActions.setDetails(response.data.getOrganisation as OrganisationEntity)
      : AdminActions.notFound())
  ));



  constructor(
    private actions: Actions,
    private getOrganisationService: GetOrganisationDetailsGQL,
  ) {}
}
