import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestPageFeatureStateKey } from '../constants/contest-page-feature.constants';
import { ContestPageFeatureState } from './contest-page-feature.reducer';

export const selectContestPageFeatureState = createFeatureSelector<ContestPageFeatureState>(contestPageFeatureStateKey);

export const selectRecentContests = createSelector(
  selectContestPageFeatureState,
  state => state.recentContests
);