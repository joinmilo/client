import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchConsoleClicksKey, searchConsoleCtrKey, searchConsoleImpressionsKey, searchConsolePositionsKey } from 'src/app/core/constants/analytics.constant';
import { articleAdminDetailsSearchStateKey } from '../constants/article-admin-details-search.constants';
import { ArticleAdminDetailsSearchState } from './article-admin-details-search.reducer';

export const selectArticleAdminDetailsSearchState = createFeatureSelector<ArticleAdminDetailsSearchState>(articleAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectArticleAdminDetailsSearchState,
  state => state.slug
);

export const selectPeriodParam = createSelector(
  selectArticleAdminDetailsSearchState,
  state => state.periodParam
);

export const selectIntervalParam = createSelector(
  selectArticleAdminDetailsSearchState,
  state => state.intrervalParam
);

export const selectSearchStatistics = createSelector(
  selectArticleAdminDetailsSearchState,
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
