import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';
import { AuthorAdminOverviewActions } from './author-admin-overview.actions';

export interface AuthorAdminOverviewState {
  overviewData?: PageableList_UserContextEntity,
  params: FilterSortPaginateInput
}

export const initialState: AuthorAdminOverviewState = {
  params: {}
};

export const authorAdminOverviewReducer = createReducer(
  initialState,

  on(AuthorAdminOverviewActions.updateParams, (state, action): AuthorAdminOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(AuthorAdminOverviewActions.setOverviewData, (state, action): AuthorAdminOverviewState => (
    { ...state, overviewData: action.authors }
  )),
);
