import { createSelector } from '@ngrx/store';
import { selectCoreState } from './selector';

export const selectConfigurations = createSelector(
  selectCoreState,
  state => state?.configurations
);

export const selectConfiguration = (keyword: string) =>
  createSelector(
    selectConfigurations,
    configurations => configurations?.find(c => c?.keyword === keyword)
  );

export const selectIsLoading = createSelector(
  selectCoreState,
  state => state.ongoingRequests > 0,
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