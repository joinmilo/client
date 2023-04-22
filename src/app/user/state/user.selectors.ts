import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey } from '../constants/user.constants';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>(userFeatureKey);

export const selectUserVerified = createSelector(
  selectUserState,
  state => state.verified
);

export const selectSetEntropy = createSelector(
  selectUserState,
  state => state.entropy
);