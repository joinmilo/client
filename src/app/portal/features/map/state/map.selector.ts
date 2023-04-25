import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MapState} from './map.reducer';
import {mapFeatureKey} from '../constants/map.constants';

export const selectMapState = createFeatureSelector<MapState>(mapFeatureKey);

export const selectActiveFilter = createSelector(
  selectMapState, (state) => state.activeFilter
);

export const selectEventFilterOptions = createSelector(
  selectMapState, (state) => state.eventsFilterOptions
);
export const selectEvents = createSelector(
  selectMapState, (state) => state.events
);
export const selectEventFilter = createSelector(
  selectMapState, (state) => state.eventFilter
);

export const selectOrganisationFilterOptions = createSelector(
  selectMapState, (state) => state.organisationFilterOptions
);
export const selectOrganisations = createSelector(
  selectMapState, (state) => state.organisations
);
export const selectOrganisationFilter = createSelector(
  selectMapState, (state) => state.organisationFilter
);

export const selectDealFilterOptions = createSelector(
  selectMapState, (state) => state.dealFilterOptions
);
export const selectDeals = createSelector(
  selectMapState, (state) => state.deals
);
export const selectDealFilter = createSelector(
  selectMapState, (state) => state.dealFilter
);

export const selectMapFilters = createSelector(
  selectMapState, (state) => ({
    eventFilter: state.eventFilter,
    organisationFilter : state.organisationFilter,
    dealFilter: state.dealFilter
  })
);

export const selectResults = createSelector(
  selectMapState, (state) => state.searchResults
)
