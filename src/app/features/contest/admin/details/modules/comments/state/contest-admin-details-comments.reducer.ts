import { createReducer, on } from '@ngrx/store';

import { Period } from 'ngx-cinlib/core';
import { FilterSortPaginateInput, Maybe, PageableList_ContestCommentEntity } from 'src/app/core/api/generated/schema';
import { ContestAdminDetailsCommentsActions } from './contest-admin-details-comments.actions';

export interface ContestAdminDetailsCommentsState {
  comments?: PageableList_ContestCommentEntity,
  period?: Period,
  slug?: Maybe<string>,
  params : FilterSortPaginateInput
}

export const initialState: ContestAdminDetailsCommentsState = {
  params:{}
};

export const contestAdminDetailsCommentsReducer = createReducer(
  initialState,

  on(ContestAdminDetailsCommentsActions.updateParams, (state, action): ContestAdminDetailsCommentsState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(ContestAdminDetailsCommentsActions.updateParams, (state, action): ContestAdminDetailsCommentsState => (
    { ...state, period: Object.assign({ ...state.period } || {}, action.period) }
  )),

  on(ContestAdminDetailsCommentsActions.updateParams, (state, action): ContestAdminDetailsCommentsState => (
    { ...state, slug: action.slug }
  )),

  on(ContestAdminDetailsCommentsActions.setComments, (state, action): ContestAdminDetailsCommentsState => (
    { ...state, comments: action.comments }
  )),
);
