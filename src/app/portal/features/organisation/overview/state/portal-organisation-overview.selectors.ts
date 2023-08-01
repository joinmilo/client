import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarkerDefinition } from 'src/app/shared/map/typings/map';
import { portalOrganisationOverviewStateKey } from '../constants/portal-organisation-overview.constants';
import { SuburbOrganisation } from '../typings/portal-overview-organisation-suburb';
import { PortalOrganisationOverviewState } from './portal-organisation-overview.reducer';

export const selectPortalOrganisationOverviewState = createFeatureSelector<PortalOrganisationOverviewState>(portalOrganisationOverviewStateKey);

export const selectSponsoredOrganisation = createSelector(
  selectPortalOrganisationOverviewState,
  state => state.sponsoredOrganisation
);

export const selectOverviewData = createSelector(
  selectPortalOrganisationOverviewState,
  state => state.overviewData
);

export const selectOverviewDataSuburbs = createSelector(
  selectOverviewData,
  organisations => {
    return organisations?.result?.reduce((result, current) => {
      const existing = result.find(suburb => suburb.id === current?.address?.suburb?.id);

      existing
        ? existing.organisations?.push(current)
        : result.push({ ...current?.address?.suburb, organisations: [current] } as SuburbOrganisation);

      return result;
    }, [] as SuburbOrganisation[]);
  }
);

export const selectOverviewDataMarkers = createSelector(
  selectOverviewData,
  deals => ({
    data: deals?.result,
    entity: 'OrganisationEntity'
  } as MarkerDefinition
  )
);

export const selectParams = createSelector(
  selectPortalOrganisationOverviewState,
  state => state.params
);