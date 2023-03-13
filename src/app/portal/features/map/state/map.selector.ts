import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MapState} from './map.reducer';
import {mapFeatureKey} from '../constants/map.constants';

export const selectMapState = createFeatureSelector<MapState>(mapFeatureKey);

export const selectEventFilterOptions = createSelector(
  selectMapState, (state) => state.eventFilterOptions
);

export const selectEvents = createSelector(
  selectMapState, (state) => state.events
)
