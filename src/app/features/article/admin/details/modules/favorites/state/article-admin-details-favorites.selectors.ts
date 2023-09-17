import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminDetailsFavoritesStateKey } from '../constants/article-admin-details-favorites.constants';
import { ArticleAdminDetailsFavoritesState } from './article-admin-details-favorites.reducer';

export const selectArticleAdminDetailsFavoritesState = createFeatureSelector<ArticleAdminDetailsFavoritesState>(articleAdminDetailsFavoritesStateKey);

export const selectArticleAdminDetailsFavorites = createSelector(
  selectArticleAdminDetailsFavoritesState,
  state => state.comments
);

export const selectSlug = createSelector(
  selectArticleAdminDetailsFavoritesState,
  state => state.slug
);

export const selectParams = createSelector(
  selectArticleAdminDetailsFavoritesState,
  state => state.params
);