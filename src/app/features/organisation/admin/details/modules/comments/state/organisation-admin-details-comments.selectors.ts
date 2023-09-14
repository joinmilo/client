import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminDetailsCommentsStateKey } from '../constants/organisation-admin-details-comments.constants';
import { OrganisationAdminDetailsCommentsState } from './organisation-admin-details-comments.reducer';

export const selectOrganisationAdminDetailsCommentsState = createFeatureSelector<OrganisationAdminDetailsCommentsState>(organisationAdminDetailsCommentsStateKey);

export const selectOrganisationAdminDetailsComments = createSelector(
  selectOrganisationAdminDetailsCommentsState,
  state => state.comments
);

export const selectPeriod = createSelector(
  selectOrganisationAdminDetailsCommentsState,
  state => state.period
);

export const selectSlug = createSelector(
  selectOrganisationAdminDetailsCommentsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectOrganisationAdminDetailsCommentsState,
  state => state.params
);