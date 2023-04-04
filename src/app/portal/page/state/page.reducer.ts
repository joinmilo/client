import { createReducer, on } from '@ngrx/store';
import { ArticleEntity, Maybe, PageEntity } from 'src/schema/schema';
import { PageActions, PageFeatureActions } from './page.actions';

export interface PageState {
  page?: Maybe<PageEntity>,
  recentArticles?: Maybe<ArticleEntity[]>,
}

export const initialState: PageState = { };

export const pageReducer = createReducer(
  initialState,

  on(PageActions.setCurrentPage, (state, action): PageState => (
    { ...state, page: action.page }
  )),

  on(PageFeatureActions.setRecentArticles, (state, action): PageState => (
    { ...state, recentArticles: action.articles }
  )),

);
