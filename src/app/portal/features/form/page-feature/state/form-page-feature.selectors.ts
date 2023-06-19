import { createFeatureSelector, createSelector } from '@ngrx/store';
import { formPageFeatureStateKey } from '../constants/form-page-feature.constants';
import { FormPageFeatureState } from './form-page-feature.reducer';

export const selectFormPageFeatureState = createFeatureSelector<FormPageFeatureState>(formPageFeatureStateKey);

export const selectRecentForms = createSelector(
  selectFormPageFeatureState,
  state => state.recentForms
);