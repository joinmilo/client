import { createFeatureSelector, createSelector } from '@ngrx/store';
import { pageStateKey } from '../constants/page.constants';
import { PageState } from './page.reducer';

export const selectPageState = createFeatureSelector<PageState>(pageStateKey);

export const selectCurrentPage = createSelector(
  selectPageState,
  state => state.page
);
