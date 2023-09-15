import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_ArticleCommentEntity } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { ArticleAdminDetailsCommentsActions } from './article-admin-details-comments.actions';

export interface ArticleAdminDetailsCommentsState {
  comments?: PageableList_ArticleCommentEntity,
  period?: Period,
  slug?: Maybe<string>,
  params : FilterSortPaginateInput
}

export const initialState: ArticleAdminDetailsCommentsState = {
  params:{}
};

export const articleAdminDetailsCommentsReducer = createReducer(
  initialState,

  on(ArticleAdminDetailsCommentsActions.updateParams, (state, action): ArticleAdminDetailsCommentsState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(ArticleAdminDetailsCommentsActions.updateParams, (state, action): ArticleAdminDetailsCommentsState => (
    { ...state, period: Object.assign({ ...state.period } || {}, action.period) }
  )),

  on(ArticleAdminDetailsCommentsActions.updateParams, (state, action): ArticleAdminDetailsCommentsState => (
    { ...state, slug: action.slug }
  )),

  on(ArticleAdminDetailsCommentsActions.setComments, (state, action): ArticleAdminDetailsCommentsState => (
    { ...state, comments: action.comments }
  )),
);
