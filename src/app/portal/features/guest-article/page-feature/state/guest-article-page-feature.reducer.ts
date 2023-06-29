import { createReducer, on } from '@ngrx/store';
import { ArticleEntity, Maybe } from 'src/schema/schema';
import { GuestArticlePageFeatureActions } from './guest-article-page-feature.actions';

export interface GuestArticlePageFeatureState {
  recentGuestArticles?: Maybe<ArticleEntity[]>,
}

export const initialState: GuestArticlePageFeatureState = { };

export const articlePageFeatureReducer = createReducer(
  initialState,

  on(GuestArticlePageFeatureActions.setRecentGuestArticles, (state, action): GuestArticlePageFeatureState => (
    { ...state, recentGuestArticles: action.articles }
  )),
);
