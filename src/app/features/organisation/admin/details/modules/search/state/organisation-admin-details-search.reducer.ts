import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { OrganisationAdminDetailsSearchActions } from './organisation-admin-details-search.actions';

export interface OrganisationAdminDetailsSearchState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: OrganisationAdminDetailsSearchState = {
};

export const organisationAdminDetailsSearchReducer = createReducer(
  initialState,

  on(OrganisationAdminDetailsSearchActions.setSlug, (state, action): OrganisationAdminDetailsSearchState => (
    { ...state, slug: action.slug }
  )),

  on(OrganisationAdminDetailsSearchActions.updateParams, (state, action): OrganisationAdminDetailsSearchState => (
    { ...state, params: action.params }
  )),

  on(OrganisationAdminDetailsSearchActions.setStatistics, (state, action): OrganisationAdminDetailsSearchState => (
    { ...state, statistics: action.result }
  )),

);
