import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchConsoleClicksKey, searchConsoleCtrKey, searchConsoleImpressionsKey, searchConsolePositionsKey } from 'src/app/core/constants/analytics.constant';
import { surveyAdminDetailsSearchStateKey } from '../constants/survey-admin-details-search.constants';
import { SurveyAdminDetailsSearchState } from './survey-admin-details-search.reducer';

export const selectSurveyAdminDetailsSearchState = createFeatureSelector<SurveyAdminDetailsSearchState>(surveyAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectSurveyAdminDetailsSearchState,
  state => state.slug
);

export const selectPeriodParam = createSelector(
  selectSurveyAdminDetailsSearchState,
  state => state.periodParam
);

export const selectIntervalParam = createSelector(
  selectSurveyAdminDetailsSearchState,
  state => state.intrervalParam
);

export const selectSearchStatistics = createSelector(
  selectSurveyAdminDetailsSearchState,
  state => state.searchStatistics
);

export const selectClicksStatistics = createSelector(
  selectSearchStatistics,
  statistics => statistics
    ?.filter(statistic => statistic.name === searchConsoleClicksKey)
    ?.[0]
);

export const selectImpressionsStatistics = createSelector(
  selectSearchStatistics,
  statistics => statistics
    ?.filter(statistic => statistic.name === searchConsoleImpressionsKey)
    ?.[0]
);

export const selectPositionsStatistics = createSelector(
  selectSearchStatistics,
  statistics => statistics
    ?.filter(statistic => statistic.name === searchConsolePositionsKey)
    ?.[0]
);

export const selectCtrStatistics = createSelector(
  selectSearchStatistics,
  statistics => statistics
    ?.filter(statistic => statistic.name === searchConsoleCtrKey)
    ?.[0]
);
