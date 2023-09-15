import { createReducer, on } from '@ngrx/store';

import { Maybe, OrganisationEntity } from 'src/app/core/api/generated/schema';
import { OrganisationAdminDetailsLayoutActions } from './organisation-admin-details-layout.actions';

export interface OrganisationAdminDetailsLayoutState {
  details?: Maybe<OrganisationEntity>;
}

export const initialState: OrganisationAdminDetailsLayoutState = {
};

export const organisationAdminDetailsLayoutReducer = createReducer(
  initialState,

  on(
    OrganisationAdminDetailsLayoutActions.setDetails,
    (state, action): OrganisationAdminDetailsLayoutState => ({
      ...state, details: action.organisation
    })),
);
