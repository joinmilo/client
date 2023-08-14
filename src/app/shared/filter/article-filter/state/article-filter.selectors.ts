import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleFilterStateKey } from '../constants/event-filter.constants';
import { createArticleParams } from '../utils/params.utils';
import { ArticleFilterState } from './article-filter.reducer';

export const selectArticleFilterState = createFeatureSelector<ArticleFilterState>(articleFilterStateKey);

export const selectFiltersActive = createSelector(
  selectArticleFilterState,
  state => state?.params
    && Object.values(state.params).some((value) => {
      switch(true) {
        case Array.isArray(value):
          return !!(value as Array<unknown>)?.length;
        default:
          return !!value;
      }
    })
);

export const selectCategories = createSelector(
  selectArticleFilterState,
  state => state.categories
);

export const selectRawFilterParams = createSelector(
  selectArticleFilterState,
  state => state?.params
);

export const selectArticleFilterParams = createSelector(
  selectRawFilterParams,
  params => params
    ? createArticleParams(params)
    : undefined
);