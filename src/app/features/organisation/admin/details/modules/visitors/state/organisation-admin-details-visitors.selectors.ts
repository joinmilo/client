import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminDetailsVisitorsStateKey } from '../constants/organisation-admin-details-visitors.constants';
import { OrganisationAdminDetailsVisitorsState } from './organisation-admin-details-visitors.reducer';

export const selectOrganisationAdminDetailsVisitorsState = createFeatureSelector<OrganisationAdminDetailsVisitorsState>(organisationAdminDetailsVisitorsStateKey);

export const selectSlug = createSelector(
  selectOrganisationAdminDetailsVisitorsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectOrganisationAdminDetailsVisitorsState,
  state => state.params
);

export const selectVisitorsStatistics = createSelector(
  selectOrganisationAdminDetailsVisitorsState,
  state => state.statistics
);