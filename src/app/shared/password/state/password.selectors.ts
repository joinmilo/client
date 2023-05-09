import { createFeatureSelector, createSelector } from '@ngrx/store';
import { passwordStateKey } from '../password.constants';
import { PasswordState } from './password.reducer';

export const selectUserState = createFeatureSelector<PasswordState>(passwordStateKey);

export const selectSetEntropy = createSelector(
  selectUserState,
  state => state.entropy
);