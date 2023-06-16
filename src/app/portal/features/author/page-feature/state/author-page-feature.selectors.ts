import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authorPageFeatureStateKey } from '../constants/author-page-feature.constants';
import { AuthorPageFeatureState } from './author-page-feature.reducer';

export const selectAuthorPageFeatureState = createFeatureSelector<AuthorPageFeatureState>(authorPageFeatureStateKey);

export const selectRecentAuthors = createSelector(
  selectAuthorPageFeatureState,
  state => state.recentAuthors
);