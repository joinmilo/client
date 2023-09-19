import { createReducer, on } from '@ngrx/store';
import { ArticleEntity, FilterSortPaginateInput, Maybe, PageableList_ArticleEntity } from 'src/app/core/api/generated/schema';
import { ArticleAdminOverviewActions } from './article-admin-overview.actions';

export interface ArticleAdminOverviewState {
  overviewData?: PageableList_ArticleEntity,
  params: FilterSortPaginateInput,
  sponsoredArticle?: Maybe<ArticleEntity>,
}

export const initialState: ArticleAdminOverviewState = {
  params: {}
};

export const articleAdminOverviewReducer = createReducer(
  initialState,
  
  on(ArticleAdminOverviewActions.updateParams, (state, action): ArticleAdminOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(ArticleAdminOverviewActions.setOverviewData, (state, action): ArticleAdminOverviewState => (
    { ...state, overviewData: action.articles }
  )),
);
