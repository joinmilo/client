import { createFeatureSelector, createSelector } from '@ngrx/store';
import { passwordStateKey } from '../constants/password.constants';
import { PasswordState } from './password.reducer';

export const selectPasswordState = createFeatureSelector<PasswordState>(passwordStateKey);

export const selectPasswordStrength = createSelector(
  selectPasswordState,
  state => state.strengthRate
);

