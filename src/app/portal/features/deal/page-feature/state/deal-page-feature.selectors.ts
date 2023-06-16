import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealPageFeatureStateKey } from '../constants/deal-page-feature.constants';
import { DealPageFeatureState } from './deal-page-feature.reducer';

export const selectDealPageFeatureState = createFeatureSelector<DealPageFeatureState>(dealPageFeatureStateKey);

export const selectRecentDeals = createSelector(
  selectDealPageFeatureState,
  state => state.recentDeals
);