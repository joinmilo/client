import { createFeatureSelector, createSelector } from '@ngrx/store';

import { selectUserOrganisationRatings } from 'src/app/core/state/selectors/user.selectors';
import { portalOrganisationDetailsStateKey } from '../constants/organisation-details.constant';
import { PortalOrganisationDetailsState } from './portal-organisation-details.reducer';

export const selectPortalOrganisationDetailsState = createFeatureSelector<PortalOrganisationDetailsState>(portalOrganisationDetailsStateKey);

export const selectOrganisationDetails = createSelector(
  selectPortalOrganisationDetailsState,
  state => state.details
);

export const selectOrganisationComments = createSelector(
  selectPortalOrganisationDetailsState,
  state => state.comments
);

export const selectOrganisationUserRating = createSelector(
  selectOrganisationDetails,
  selectUserOrganisationRatings,
  (organisation, ratings) =>
    ratings?.find(rating => rating?.organisation?.id === organisation?.id)
);

export const selectCalculatedOrganisationRatings = createSelector(
  selectOrganisationDetails,
  organisation => organisation?.calculatedRatings
);

export const selectMembers = createSelector(
  selectOrganisationDetails,
  (organisation) =>
    organisation?.members
      ?.filter(member => member?.isPublic)
      ?.map(member => member?.userContext)
);

export const selectOrganisationMedia = createSelector(
  selectOrganisationDetails,
  state => state?.uploads?.map(upload => upload?.media ?? {})
);

