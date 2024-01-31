import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { filter, map, switchMap } from 'rxjs';
import { OrganisationConfigurationEntity, RoleEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { GetOrganisationConfigurationGQL } from '../../../api/generated/get-organisation-configuration.query.generated';
import { GetRolesGQL } from '../../../api/generated/get-roles.generated';
import { SaveOrganisationConfigurationGQL } from '../../../api/generated/save-organisation-configuration.mutation.generated';
import { OrganisationAdminConfigurationActions } from './organisation-admin-configuration.actions';

@Injectable()
export class OrganisationAdminConfigurationEffects {

  getOrganisationConfiguration = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminConfigurationActions.getOrganisationConfiguration),
    switchMap(() => this.getConfigurationService.watch({}).valueChanges),
    filter(response => !!response.data.getOrganisationConfiguration?.id),
    map(response => OrganisationAdminConfigurationActions.setOrganisationConfiguration(response.data.getOrganisationConfiguration as OrganisationConfigurationEntity))
  ));

  getRoles = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminConfigurationActions.getRoles),
    switchMap(() => this.getRolesService.watch().valueChanges),
    map(response => OrganisationAdminConfigurationActions.rolesRetrieved(response?.data?.getRoles?.result as RoleEntity[]))
  ));

  save = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminConfigurationActions.save),
    switchMap(action => this.saveConfigurationService.mutate({
      entity: action.configuration
    })),
    map(() => OrganisationAdminConfigurationActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminConfigurationActions.saved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));
  
  constructor(
    private actions: Actions,
    private saveConfigurationService: SaveOrganisationConfigurationGQL,
    private getConfigurationService: GetOrganisationConfigurationGQL,
    private getRolesService: GetRolesGQL,
  ) {}
}
