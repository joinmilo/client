import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, OrganisationEntity } from 'src/app/core/api/generated/schema';
import { OrganisationAdminFormActions } from './organisation-admin-form.actions';

export interface OrganisationAdminFormState {
  editOrganisation?: Maybe<OrganisationEntity>;
  params: FilterSortPaginateInput
}

export const initialState: OrganisationAdminFormState = {
  params: {}
};

export const organisationAdminFormReducer = createReducer(
  initialState,

  on(
    OrganisationAdminFormActions.setOrganisation,
    (state, action): OrganisationAdminFormState => ({
      ...state, editOrganisation: action.organisation
    })),

  on(
    OrganisationAdminFormActions.saved,
    OrganisationAdminFormActions.cancelled,
    (state): OrganisationAdminFormState => (
      { ...state, editOrganisation: undefined }
    )
  ),

);
