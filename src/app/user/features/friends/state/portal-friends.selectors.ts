import { createFeatureSelector } from "@ngrx/store";
import { portalFriendsStateKey } from '../constants/portal-friends.constant';
import { PortalFriendsState } from './portal-friends.reducer';

export const selectPortalFriendsState = createFeatureSelector<PortalFriendsState>(portalFriendsStateKey);


