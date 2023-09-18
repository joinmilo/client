import { createReducer, on } from '@ngrx/store';

import { AnalyticsDto, Maybe } from 'src/app/core/api/generated/schema';
import { AnalyticsParams } from 'src/app/shared/widgets/analytics/typings/analytics';
import { AdminSettingsPageDetailsSearchActions } from './admin-settings-page-details-search.actions';

export interface AdminSettingsPageDetailsSearchState {
  slug?: Maybe<string>;
  params?: AnalyticsParams,

  statistics?: Maybe<AnalyticsDto[]>;
}

export const initialState: AdminSettingsPageDetailsSearchState = {
};

export const adminSettingsPageDetailsSearchReducer = createReducer(
  initialState,

  on(AdminSettingsPageDetailsSearchActions.setSlug, (state, action): AdminSettingsPageDetailsSearchState => (
    { ...state, slug: action.slug }
  )),

  on(AdminSettingsPageDetailsSearchActions.updateParams, (state, action): AdminSettingsPageDetailsSearchState => (
    { ...state, params: action.params }
  )),

  on(AdminSettingsPageDetailsSearchActions.setStatistics, (state, action): AdminSettingsPageDetailsSearchState => (
    { ...state, statistics: action.result }
  )),

);
