import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MapState} from './map.reducer';
import {mapFeatureKey} from '../constants/map.constants';

export const selectMapState = createFeatureSelector<MapState>(mapFeatureKey);

export const selectActiveFilter = createSelector(
  selectMapState, (state) => state.activeFilter
);

export const selectResults = createSelector(
  selectMapState, (state) => state.searchResults
);

export const selectPois = createSelector(
  selectMapState, (state) => state.pois
);
