import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';
import { ArticleAdminDetailsFavoritesActions } from './article-admin-details-favorites.actions';

export interface ArticleAdminDetailsFavoritesState {
  comments?: PageableList_UserContextEntity,
  slug?: Maybe<string>,
  params : FilterSortPaginateInput
}

export const initialState: ArticleAdminDetailsFavoritesState = {
  params:{}
};

export const articleAdminDetailsFavoritesReducer = createReducer(
  initialState,

  on(ArticleAdminDetailsFavoritesActions.updateParams, (state, action): ArticleAdminDetailsFavoritesState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(ArticleAdminDetailsFavoritesActions.updateParams, (state, action): ArticleAdminDetailsFavoritesState => (
    { ...state, slug: action.slug }
  )),

  on(ArticleAdminDetailsFavoritesActions.setFavorites, (state, action): ArticleAdminDetailsFavoritesState => (
    { ...state, comments: action.comments }
  )),
);
