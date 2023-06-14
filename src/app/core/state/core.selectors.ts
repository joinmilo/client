import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coreStateKey } from '../constants/core.constants';
import { CoreState } from './core.reducer';

export const selectCoreState = createFeatureSelector<CoreState>(coreStateKey);

export const selectCurrentUser = createSelector(
  selectCoreState,
  state => state?.currentUser
);

export const selectConfigurations = createSelector(
  selectCoreState,
  state => state?.configurations
);

export const selectConfiguration = (key: string) =>
  createSelector(
    selectConfigurations,
    configurations => configurations?.find(c => c?.key === key)
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

export const selectNotifications = createSelector(
  selectCoreState,
  state => state?.notifications
)

export const selectSavedNotification = createSelector(
  selectCoreState,
  state => state.savedNotification
);

export const selectTheme = createSelector(
  selectCoreState,
  state => state?.currentTheme
);