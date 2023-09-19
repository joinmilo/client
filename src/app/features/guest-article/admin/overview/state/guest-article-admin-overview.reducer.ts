import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_ArticleEntity } from 'src/app/core/api/generated/schema';
import { GuestArticleAdminOverviewActions } from './guest-article-admin-overview.actions';

export interface GuestArticleAdminOverviewState {
  overviewData?: PageableList_ArticleEntity,
  params: FilterSortPaginateInput,
}

export const initialState: GuestArticleAdminOverviewState = {
  params: {}
};

export const guestArticleAdminOverviewReducer = createReducer(
  initialState,
  
  on(GuestArticleAdminOverviewActions.updateParams, (state, action): GuestArticleAdminOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(GuestArticleAdminOverviewActions.setOverviewData, (state, action): GuestArticleAdminOverviewState => (
    { ...state, overviewData: action.articles }
  )),
);
