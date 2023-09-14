import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchConsoleClicksKey, searchConsoleCtrKey, searchConsoleImpressionsKey, searchConsolePositionsKey } from 'src/app/core/constants/analytics.constant';
import { contestAdminDetailsSearchStateKey } from '../constants/contest-admin-details-search.constants';
import { ContestAdminDetailsSearchState } from './contest-admin-details-search.reducer';

export const selectContestAdminDetailsSearchState = createFeatureSelector<ContestAdminDetailsSearchState>(contestAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectContestAdminDetailsSearchState,
  state => state.slug
);

export const selectPeriodParam = createSelector(
  selectContestAdminDetailsSearchState,
  state => state.periodParam
);

export const selectIntervalParam = createSelector(
  selectContestAdminDetailsSearchState,
  state => state.intrervalParam
);

export const selectSearchStatistics = createSelector(
  selectContestAdminDetailsSearchState,
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
