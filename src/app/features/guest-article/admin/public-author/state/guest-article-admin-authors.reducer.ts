import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_ArticlePublicAuthorEntity } from 'src/app/core/api/generated/schema';
import { GuestArticleAdminPublicAuthorsActions } from './guest-article-admin-authors.actions';

export interface GuestArticleAdminPublicAuthorsState {
  overviewData?: PageableList_ArticlePublicAuthorEntity,
  params: FilterSortPaginateInput,
}

export const initialState: GuestArticleAdminPublicAuthorsState = {
  params: {}
};

export const guestArticleAdminPublicAuthorsReducer = createReducer(
  initialState,
  
  on(GuestArticleAdminPublicAuthorsActions.updateParams, (state, action): GuestArticleAdminPublicAuthorsState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(GuestArticleAdminPublicAuthorsActions.setOverviewData, (state, action): GuestArticleAdminPublicAuthorsState => (
    { ...state, overviewData: action.publicAuthors }
  )),
);
