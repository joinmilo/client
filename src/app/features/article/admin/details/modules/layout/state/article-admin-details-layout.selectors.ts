import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminDetailsLayoutStateKey } from '../constants/article-admin-details-layout.constants';
import { ArticleAdminDetailsLayoutState } from './article-event-admin-details-layout.reducer';

export const selectArticleAdminDetailsLayoutState = createFeatureSelector<ArticleAdminDetailsLayoutState>(articleAdminDetailsLayoutStateKey);

export const selectArticleAdminDetailsLayout = createSelector(
  selectArticleAdminDetailsLayoutState,
  state => state.details
);
