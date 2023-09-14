import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, IntervalFilter, Maybe } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { OrganisationAdminDetailsSearchActions } from './organisation-admin-details-search.actions';

export interface OrganisationAdminDetailsSearchState {
  slug?: Maybe<string>;
  periodParam?: Period,
  intrervalParam?: IntervalFilter,

  searchStatistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: OrganisationAdminDetailsSearchState = {
};

export const organisationAdminDetailsSearchReducer = createReducer(
  initialState,

  on(OrganisationAdminDetailsSearchActions.init, (state, action): OrganisationAdminDetailsSearchState => (
    { ...state,
      slug: action.slug,
      periodParam: action.period,
      intrervalParam: action.interval
    }
  )),

  on(OrganisationAdminDetailsSearchActions.updatePeriod, (state, action): OrganisationAdminDetailsSearchState => (
    { ...state, periodParam: action.period }
  )),

  on(OrganisationAdminDetailsSearchActions.updateInterval, (state, action): OrganisationAdminDetailsSearchState => (
    { ...state, intrervalParam: action.interval }
  )),

  on(OrganisationAdminDetailsSearchActions.setSearchStatistics, (state, action): OrganisationAdminDetailsSearchState => (
    { ...state, searchStatistics: action.result }
  )),

);
