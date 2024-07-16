import { createFeatureSelector, createSelector } from '@ngrx/store';
import { organisationAdminDetailsEventsStateKey } from '../constants/organisation-admin-details-events.constants';
import { OrganisationAdminDetailsEventsState } from './organisation-admin-details-events.reducer';

export const selectOrganisationAdminDetailsEventsState = createFeatureSelector<OrganisationAdminDetailsEventsState>(organisationAdminDetailsEventsStateKey);

export const selectOrganisationAdminDetailsEvents = createSelector(
  selectOrganisationAdminDetailsEventsState,
  state => state.events
);

export const selectSlug = createSelector(
  selectOrganisationAdminDetailsEventsState,
  state => state.slug
);

export const selectParams = createSelector(
  selectOrganisationAdminDetailsEventsState,
  state => state.params
);
