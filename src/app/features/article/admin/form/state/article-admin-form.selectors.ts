import { createFeatureSelector, createSelector } from '@ngrx/store';
import { articleAdminFormStateKey } from '../constants/article-admin-form.constants';
import { ArticleAdminFormState } from './article-admin-form.reducer';

export const selectArticleAdminFormState = createFeatureSelector<ArticleAdminFormState>(articleAdminFormStateKey);

export const selectEditableArticle= createSelector(
  selectArticleAdminFormState,
  state => state.article
);

export const selectArticleAdminFormMedia = createSelector(
  selectArticleAdminFormState,
  state => state.article?.uploads?.map(upload => upload?.media ?? {})
);
