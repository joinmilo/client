import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dealAdminDetailsLayoutStateKey } from '../constants/deal-admin-details-layout.constants';
import { DealAdminDetailsLayoutState } from './deal-admin-details-layout.reducer';

export const selectDealAdminDetailsLayoutState = createFeatureSelector<DealAdminDetailsLayoutState>(dealAdminDetailsLayoutStateKey);

export const selectDealAdminDetailsLayout = createSelector(
  selectDealAdminDetailsLayoutState,
  state => state.details
);
