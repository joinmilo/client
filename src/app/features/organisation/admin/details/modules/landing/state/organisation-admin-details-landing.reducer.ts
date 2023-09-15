import { createReducer, on } from '@ngrx/store';
import { Maybe, OrganisationEntity } from 'src/app/core/api/generated/schema';
import { OrganisationAdminDetailsLandingActions } from './organisation-admin-details-landing.actions';

export interface OrganisationAdminDetailsLandingState {
  details?: Maybe<OrganisationEntity>;
}

export const initialState: OrganisationAdminDetailsLandingState = {
};

export const organisationAdminDetailsLandingReducer = createReducer(
  initialState,

  on(
    OrganisationAdminDetailsLandingActions.setDetails,
    (state, action): OrganisationAdminDetailsLandingState => ({
      ...state, details: action.organisation
    })),

);
