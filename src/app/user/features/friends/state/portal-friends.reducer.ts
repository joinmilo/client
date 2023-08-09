import { createReducer, on } from "@ngrx/store";
import { Maybe, UserContextEntity } from "src/schema/schema";
import { PortalFriendsActions } from './portal-friends.actions';

export interface PortalFriendsState {
  allUsers?: Maybe<UserContextEntity[]>,
  update?: Maybe<UserContextEntity[]>
}

export const initialState: PortalFriendsState = { };

export const portalFriendsReducer = createReducer(
  initialState,

  on(PortalFriendsActions.friendsUpdated, (state, action): PortalFriendsState => ({
      ...state, update: action.friends }
  )),

  on(PortalFriendsActions.setUsers, (state, action): PortalFriendsState => (
    { ...state, allUsers: action.friends }
  )),
);