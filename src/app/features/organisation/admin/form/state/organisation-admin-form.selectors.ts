import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminFormStateKey } from '../constants/organisation-admin-form.constants';
import { OrganisationAdminFormState } from './organisation-admin-form.reducer';

export const selectOrganisationAdminFormState = createFeatureSelector<OrganisationAdminFormState>(organisationAdminFormStateKey);

export const selectEditableOrganisation = createSelector(
  selectOrganisationAdminFormState,
  state => state.editOrganisation
);