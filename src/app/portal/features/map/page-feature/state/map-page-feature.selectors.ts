import { createFeatureSelector, createSelector } from '@ngrx/store';
import { mapPageFeatureStateKey } from '../constants/map-page-feature.constants';
import { MapPageFeatureState } from './map-page-feature.reducer';

export const selectMapPageFeatureState = createFeatureSelector<MapPageFeatureState>(mapPageFeatureStateKey);

export const selectSponsoredDeal = createSelector(
  selectMapPageFeatureState,
  state => state.sponsoredDeal
);

export const selectSponsoredEvent = createSelector(
  selectMapPageFeatureState,
  state => state.sponsoredEvent
);

export const selectSponsoredOrganisation = createSelector(
  selectMapPageFeatureState,
  state => state.sponsoredOrganisation
);