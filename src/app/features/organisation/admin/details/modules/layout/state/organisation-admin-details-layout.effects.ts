import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { OrganisationEntity } from 'src/app/core/api/generated/schema';
import { GetOrganisationDetailsLayoutGQL } from 'src/app/features/organisation/api/generated/get-organisation-details-layout.query.generated';
import { OrganisationAdminDetailsLayoutActions } from './organisation-admin-details-layout.actions';

@Injectable()
export class OrganisationAdminDetailsLayoutEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminDetailsLayoutActions.getDetails),
    switchMap((action) => this.getOrganisationService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getOrganisation?.id
      ? OrganisationAdminDetailsLayoutActions.setDetails(response.data.getOrganisation as OrganisationEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getOrganisationService: GetOrganisationDetailsLayoutGQL,
  ) {}
}
