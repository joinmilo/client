import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_ArticleCategoryEntity } from 'src/app/core/api/generated/schema';
import { ArticleAdminCategoryActions } from './article-admin-category.actions';

export interface ArticleAdminCategoryState {
  categoryData?: PageableList_ArticleCategoryEntity,
  params: FilterSortPaginateInput,
}

export const initialState: ArticleAdminCategoryState = {
  params: {}
};

export const articleAdminCategoryReducer = createReducer(
  initialState,
  
  on(ArticleAdminCategoryActions.updateParams, (state, action): ArticleAdminCategoryState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(ArticleAdminCategoryActions.setCategoryData, (state, action): ArticleAdminCategoryState => (
    { ...state, categoryData: action.categories }
  )),
);
