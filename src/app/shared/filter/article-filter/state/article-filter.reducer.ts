import { createReducer, on } from '@ngrx/store';
import { ArticleFilterQueryDefinition, ArticleFilterQueryParams } from 'src/app/core/typings/filter-params/article-filter-param';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { ArticleCategoryEntity, Maybe } from 'src/schema/schema';
import { ArticleFilterActions } from './article-filter.actions';

export interface ArticleFilterState {
  categories?: Maybe<ArticleCategoryEntity[]>,
  params: ArticleFilterQueryParams,
}

export const initialState: ArticleFilterState = {
  params: {}
};

export const articleFilterReducer = createReducer(
  initialState,

  on(ArticleFilterActions.allUpdated, (state, action): ArticleFilterState => (
    { ...state, params: action.params }
  )),

  on(ArticleFilterActions.clearAll, (state): ArticleFilterState => (
    { ...state, params: {} }
  )),

  on(ArticleFilterActions.setCategories, (state, action): ArticleFilterState => (
    { ...state, categories: action.result }
  )),

  on(ArticleFilterActions.selectedCategories, (state, action): ArticleFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [ArticleFilterQueryDefinition.articleCategories]: action.categoryIds
      }
    }
  )),

  on(ArticleFilterActions.selectedPeriod, (state, action): ArticleFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [FilterQueryDefinition.startDate]: action.period?.startDate.toISOString(),
        [FilterQueryDefinition.endDate]: action.period?.endDate.toISOString()
      }
    }
  )),

);
