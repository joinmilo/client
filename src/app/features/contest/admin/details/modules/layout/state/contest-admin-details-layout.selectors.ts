import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contestAdminDetailsLayoutStateKey } from '../constants/contest-admin-details-layout.constants';
import { ContestAdminDetailsLayoutState } from './contest-admin-details-layout.reducer';

export const selectContestAdminDetailsLayoutState = createFeatureSelector<ContestAdminDetailsLayoutState>(contestAdminDetailsLayoutStateKey);

export const selectContestAdminDetailsLayout = createSelector(
  selectContestAdminDetailsLayoutState,
  state => state.details
);
