import { createReducer, on } from '@ngrx/store';
import { ArticleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ArticleAdminDetailsLandingActions } from './article-admin-details-landing.actions';

export interface ArticleAdminDetailsLandingState {
  details?: Maybe<ArticleEntity>;
}

export const initialState: ArticleAdminDetailsLandingState = {
};

export const articleAdminDetailsLandingReducer = createReducer(
  initialState,

  on(
    ArticleAdminDetailsLandingActions.setDetails,
    (state, action): ArticleAdminDetailsLandingState => ({
      ...state, details: action.article
    })),

);
