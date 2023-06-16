import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationPageFeatureStateKey } from '../constants/organisation-page-feature.constants';
import { OrganisationPageFeatureState } from './organisation-page-feature.reducer';

export const selectOrganisationPageFeatureState = createFeatureSelector<OrganisationPageFeatureState>(organisationPageFeatureStateKey);

export const selectRecentOrganisations = createSelector(
  selectOrganisationPageFeatureState,
  state => state.recentOrganisations
);