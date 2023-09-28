import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adminLandingStateKey } from '../constants/admin-landing.constants';
import { AdminLandingState } from './admin-landing.reducer';

export const selectAdminLandingState = createFeatureSelector<AdminLandingState>(adminLandingStateKey);

export const selectDeveloperContact = createSelector(
  selectAdminLandingState,
  state => state.contact
);

export const selectMilestones= createSelector(
  selectAdminLandingState,
  state => state.milestones
);
