import { createReducer, on } from '@ngrx/store';
import { ArticleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { PortalGuestArticleActions } from './portal-guest-article.actions';

export interface PortalGuestArticleState {
  editArticle?: Maybe<ArticleEntity>;
}

export const initialState: PortalGuestArticleState = {};

export const portalGuestArticleReducer = createReducer(
  initialState,

  on(
    PortalGuestArticleActions.saved,
    PortalGuestArticleActions.cancelled,
    (state): PortalGuestArticleState => (
      { ...state, editArticle: undefined }
    )
  ),

);
