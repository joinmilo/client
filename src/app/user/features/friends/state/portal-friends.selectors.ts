import { createFeatureSelector, createSelector } from "@ngrx/store";
import { portalFriendsStateKey } from '../constants/portal-friends.constant';
import { PortalFriendsState } from './portal-friends.reducer';

export const selectPortalFriendsState = createFeatureSelector<PortalFriendsState>(portalFriendsStateKey);

export const selectFilteredUsers = createSelector(
  selectPortalFriendsState,
  state => state.filteredUsers
);
