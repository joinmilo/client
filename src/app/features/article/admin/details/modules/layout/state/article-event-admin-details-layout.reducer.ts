import { createReducer, on } from '@ngrx/store';

import { ArticleEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ArticleAdminDetailsLayoutActions } from './article-admin-details-layout.actions';

export interface ArticleAdminDetailsLayoutState {
  details?: Maybe<ArticleEntity>;
}

export const initialState: ArticleAdminDetailsLayoutState = {
};

export const articleAdminDetailsLayoutReducer = createReducer(
  initialState,

  on(
    ArticleAdminDetailsLayoutActions.setDetails,
    (state, action): ArticleAdminDetailsLayoutState => ({
      ...state, details: action.article
    })),
);
