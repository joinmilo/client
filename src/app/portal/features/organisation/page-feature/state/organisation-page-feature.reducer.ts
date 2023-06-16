import { createReducer, on } from '@ngrx/store';
import { Maybe, OrganisationEntity } from 'src/schema/schema';
import { OrganisationPageFeatureActions } from './organisation-page-feature.actions';

export interface OrganisationPageFeatureState {
  recentOrganisations?: Maybe<OrganisationEntity[]>,
}

export const initialState: OrganisationPageFeatureState = { };

export const organisationPageFeatureReducer = createReducer(
  initialState,

  on(OrganisationPageFeatureActions.setRecentOrganisations, (state, action): OrganisationPageFeatureState => (
    { ...state, recentOrganisations: action.organisations }
  )),
);
