import { createFeatureSelector, createSelector } from '@ngrx/store';
import { navigatorPortalQuestionsStateKey } from '../constants/navigator-questions.constant';
import { NavigatorPortalQuestionsState } from './navigator-portal-questions.reducer';

export const selectNavigatorQuestionsLayoutState = createFeatureSelector<NavigatorPortalQuestionsState>(navigatorPortalQuestionsStateKey);

export const selectCurrentPage = createSelector(
  selectNavigatorQuestionsLayoutState,
  state => state.currentPage
);

export const selectNavigatorStateInputs = createSelector(
  selectNavigatorQuestionsLayoutState,
  state => state.inputs
);

export const selectNavigatorStateIndex = createSelector(
  selectNavigatorQuestionsLayoutState,
  state => state.currentIndex
);