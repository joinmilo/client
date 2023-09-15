import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { OrganisationAdminDetailsVisitorsActions } from './organisation-admin-details-visitors.actions';

export interface OrganisationAdminDetailsVisitorsState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: OrganisationAdminDetailsVisitorsState = {
};

export const organisationAdminDetailsVisitorsReducer = createReducer(
  initialState,

  on(OrganisationAdminDetailsVisitorsActions.setSlug, (state, action): OrganisationAdminDetailsVisitorsState => (
    { ...state, slug: action.slug }
  )),

  on(OrganisationAdminDetailsVisitorsActions.updateParams, (state, action): OrganisationAdminDetailsVisitorsState => (
    { ...state, params: action.params }
  )),

  on(OrganisationAdminDetailsVisitorsActions.setStatistics, (state, action): OrganisationAdminDetailsVisitorsState => (
    { ...state, statistics: action.result }
  )),
);



