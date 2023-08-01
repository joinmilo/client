import { createReducer, on } from "@ngrx/store";
import { Maybe, UserContextEntity } from "src/schema/schema";
import { PortalFriendsActions } from './portal-friends.actions';

export interface PortalFriendsState {
  allUsers?: Maybe<UserContextEntity[]>,
}

export const initialState: PortalFriendsState = { };

export const portalFriendsReducer = createReducer(
  initialState,

  on(PortalFriendsActions.setUsers, (state, action): PortalFriendsState => (
    { ...state, allUsers: action.users }
  )),

);