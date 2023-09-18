import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { AdminSettingsPageDetailsVisitorsActions } from './admin-settings-page-details-visitors.actions';

export interface AdminSettingsPageDetailsVisitorsState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: AdminSettingsPageDetailsVisitorsState = {
};

export const adminSettingsPageDetailsVisitorsReducer = createReducer(
  initialState,

  on(AdminSettingsPageDetailsVisitorsActions.setSlug, (state, action): AdminSettingsPageDetailsVisitorsState => (
    { ...state, slug: action.slug }
  )),

  on(AdminSettingsPageDetailsVisitorsActions.updateParams, (state, action): AdminSettingsPageDetailsVisitorsState => (
    { ...state, params: action.params }
  )),

  on(AdminSettingsPageDetailsVisitorsActions.setStatistics, (state, action): AdminSettingsPageDetailsVisitorsState => (
    { ...state, statistics: action.result }
  )),
);



