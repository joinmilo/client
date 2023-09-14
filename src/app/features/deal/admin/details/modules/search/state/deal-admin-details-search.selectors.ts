import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchConsoleClicksKey, searchConsoleCtrKey, searchConsoleImpressionsKey, searchConsolePositionsKey } from 'src/app/core/constants/analytics.constant';
import { dealAdminDetailsSearchStateKey } from '../constants/deal-admin-details-search.constants';
import { DealAdminDetailsSearchState } from './deal-admin-details-search.reducer';

export const selectDealAdminDetailsSearchState = createFeatureSelector<DealAdminDetailsSearchState>(dealAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectDealAdminDetailsSearchState,
  state => state.slug
);

export const selectPeriodParam = createSelector(
  selectDealAdminDetailsSearchState,
  state => state.periodParam
);

export const selectIntervalParam = createSelector(
  selectDealAdminDetailsSearchState,
  state => state.intrervalParam
);

export const selectSearchStatistics = createSelector(
  selectDealAdminDetailsSearchState,
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
