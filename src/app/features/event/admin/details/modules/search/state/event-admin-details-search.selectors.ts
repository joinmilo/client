import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchConosleClicksKey, searchConsoleCtrKey, searchConsoleImpressionsKey, searchConsolePositionsKey } from 'src/app/core/constants/analytics.constant';
import { eventAdminDetailsSearchStateKey } from '../constants/event-admin-details-search.constants';
import { EventAdminDetailsSearchState } from './event-admin-details-search.reducer';

export const selectEventAdminDetailsSearchState = createFeatureSelector<EventAdminDetailsSearchState>(eventAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectEventAdminDetailsSearchState,
  state => state.slug
);

export const selectSearchStatistics = createSelector(
  selectEventAdminDetailsSearchState,
  state => state.searchStatistics
);

export const selectClicksStatistics = createSelector(
  selectSearchStatistics,
  statistics => statistics
    ?.filter(statistic => statistic.name === searchConosleClicksKey)
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
