import { createSelector } from '@ngrx/store';
import { chartsDefaultColor } from '../../constants/analytics.constant';
import { selectCoreState } from './selector';

export const selectConfigurations = createSelector(
  selectCoreState,
  state => state?.configurations
);

export const selectConfiguration = (code: string) =>
  createSelector(
    selectConfigurations,
    configurations => configurations?.find(c => c?.code === code)
  );

export const selectApps = createSelector(
  selectCoreState,
  state => state.apps
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

export const selectServerInfo = createSelector(
  selectCoreState,
  state => state.serverInfo
);

export const selectSocialMedia = createSelector(
  selectCoreState,
  state => state.socialMedia
);

export const selectTheme = createSelector(
  selectCoreState,
  state => state?.currentTheme
);

export const selectChartDefaultColors = createSelector(
  selectTheme,
  theme => {
    return theme
      ? theme?.variables
          ?.filter(variable =>
          chartsDefaultColor.includes(variable?.value))
          ?.map(variable => variable?.code as string)
      : chartsDefaultColor.map(color => getComputedStyle(document.documentElement)
          .getPropertyValue(color as string))
  }
)
