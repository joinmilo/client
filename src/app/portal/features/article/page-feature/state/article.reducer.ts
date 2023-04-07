import { createReducer, on } from '@ngrx/store';
import { ArticleEntity, Maybe } from 'src/schema/schema';
import { ArticlePageFeatureActions } from './article.actions';

export interface ArticlePageFeatureState {
  recentArticles?: Maybe<ArticleEntity[]>,
}

export const initialState: ArticlePageFeatureState = { };

export const articlePageFeatureReducer = createReducer(
  initialState,

  on(ArticlePageFeatureActions.setRecentArticles, (state, action): ArticlePageFeatureState => (
    { ...state, recentArticles: action.articles }
  )),
);
