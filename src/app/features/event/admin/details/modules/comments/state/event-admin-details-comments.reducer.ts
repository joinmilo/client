import { createReducer, on } from '@ngrx/store';

import { Period } from 'ngx-cinlib/core';
import { FilterSortPaginateInput, Maybe, PageableList_EventCommentEntity } from 'src/app/core/api/generated/schema';
import { EventAdminDetailsCommentsActions } from './event-admin-details-comments.actions';

export interface EventAdminDetailsCommentsState {
  comments?: PageableList_EventCommentEntity,
  period?: Period,
  slug?: Maybe<string>,
  params : FilterSortPaginateInput
}

export const initialState: EventAdminDetailsCommentsState = {
  params:{}
};

export const eventAdminDetailsCommentsReducer = createReducer(
  initialState,

  on(EventAdminDetailsCommentsActions.updateParams, (state, action): EventAdminDetailsCommentsState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(EventAdminDetailsCommentsActions.updateParams, (state, action): EventAdminDetailsCommentsState => (
    { ...state, period: Object.assign({ ...state.period } || {}, action.period) }
  )),

  on(EventAdminDetailsCommentsActions.updateParams, (state, action): EventAdminDetailsCommentsState => (
    { ...state, slug: action.slug }
  )),

  on(EventAdminDetailsCommentsActions.setComments, (state, action): EventAdminDetailsCommentsState => (
    { ...state, comments: action.comments }
  )),
);
