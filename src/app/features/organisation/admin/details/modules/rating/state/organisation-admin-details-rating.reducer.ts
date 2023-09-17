import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { OrganisationAdminDetailsRatingActions } from './organisation-admin-details-rating.actions';

export interface OrganisationAdminDetailsRatingState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: OrganisationAdminDetailsRatingState = {
};

export const organisationAdminDetailsRatingReducer = createReducer(
  initialState,

  on(OrganisationAdminDetailsRatingActions.setSlug, (state, action): OrganisationAdminDetailsRatingState => (
    { ...state, slug: action.slug }
  )),

  on(OrganisationAdminDetailsRatingActions.updateParams, (state, action): OrganisationAdminDetailsRatingState => (
    { ...state, params: action.params }
  )),

  on(OrganisationAdminDetailsRatingActions.setStatistics, (state, action): OrganisationAdminDetailsRatingState => (
    { ...state, statistics: action.result }
  )),
);



