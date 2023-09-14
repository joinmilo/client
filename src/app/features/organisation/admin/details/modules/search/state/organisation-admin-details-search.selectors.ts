import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchConsoleClicksKey, searchConsoleCtrKey, searchConsoleImpressionsKey, searchConsolePositionsKey } from 'src/app/core/constants/analytics.constant';
import { organisationAdminDetailsSearchStateKey } from '../constants/organisation-admin-details-search.constants';
import { OrganisationAdminDetailsSearchState } from './organisation-admin-details-search.reducer';

export const selectOrganisationAdminDetailsSearchState = createFeatureSelector<OrganisationAdminDetailsSearchState>(organisationAdminDetailsSearchStateKey);

export const selectSlug = createSelector(
  selectOrganisationAdminDetailsSearchState,
  state => state.slug
);

export const selectPeriodParam = createSelector(
  selectOrganisationAdminDetailsSearchState,
  state => state.periodParam
);

export const selectIntervalParam = createSelector(
  selectOrganisationAdminDetailsSearchState,
  state => state.intrervalParam
);

export const selectSearchStatistics = createSelector(
  selectOrganisationAdminDetailsSearchState,
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
