import { createReducer, on } from '@ngrx/store';
import { ArticleCommentEntity, ArticleEntity, Maybe } from 'src/schema/schema';
import { PortalArticleDetailsActions } from './portal-article-details.actions';

export interface PortalArticleDetailsState {
  comments?: Maybe<ArticleCommentEntity[]>,
  details?: Maybe<ArticleEntity>,
  savedArticleComment?: Maybe<ArticleCommentEntity>
}

export const initialState: PortalArticleDetailsState = {
};

export const portalArticleDetailsReducer = createReducer(
  initialState,

  on(
    PortalArticleDetailsActions.setDetails,
    PortalArticleDetailsActions.detailsUpdated,
    (state, action): PortalArticleDetailsState => 
      ({ ...state, details: action.article })
  ),

  on(PortalArticleDetailsActions.setComments, (state, action): PortalArticleDetailsState => (
    { ...state, comments: action.comments}
  )),

  on(PortalArticleDetailsActions.articleCommentSaved, (state, action): PortalArticleDetailsState => (
    { ...state, savedArticleComment: action.entity }
  )),
);
