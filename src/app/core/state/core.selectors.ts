import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coreFeatureKey } from '../constants/core.constants';
import { CoreState } from './core.reducer';

export const selectCoreState = createFeatureSelector<CoreState>(coreFeatureKey);

export const selectConfigurations = createSelector(
  selectCoreState,
  state => state?.configurations
);

export const selectLabels = createSelector(
  selectCoreState,
  state => state?.labels
);

export const selectLanguage = createSelector(
  selectCoreState,
  state => state?.language
);

export const selectLanguages = createSelector(
  selectCoreState,
  state => state?.languages
);

export const selectTheme = createSelector(
  selectCoreState,
  state => state?.currentTheme
);

export const selectConfiguration = (key: string) =>
  createSelector(
    selectConfigurations,
    configurations => configurations?.find(c => c?.key === key)
  );