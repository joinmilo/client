import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { OrganisationEntity } from 'src/app/core/api/generated/schema';
import { organisationsFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';

import { GetOrganisationFormGQL } from '../../../api/generated/get-organisation-form.query.generated';
import { SaveOrganisationGQL } from '../../../api/generated/save-organisation.mutation.generated';
import { OrganisationAdminFormActions } from './organisation-admin-form.actions';

@Injectable()
export class OrganisationAdminFormEffects {

  getOrganisation = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminFormActions.getOrganisation),
    switchMap((action) => this.getOrgansationService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getOrganisation?.id
      ? OrganisationAdminFormActions.setOrganisation(response.data.getOrganisation as OrganisationEntity)
      : AdminActions.notFound())
  ));

  cancelled = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, organisationsFeatureKey])),
  ), { dispatch: false });


  save = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminFormActions.save),
    switchMap(action => this.saveOrganisationService.mutate({
      entity: action.organisation
    })),
    map(() => OrganisationAdminFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminFormActions.saved),
    tap(() => this.router.navigate([adminUrl, organisationsFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));
  
  constructor(
    private actions: Actions,
    private router: Router,
    private saveOrganisationService: SaveOrganisationGQL,
    private getOrgansationService: GetOrganisationFormGQL,
  ) {}
}
