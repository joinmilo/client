import { createReducer } from "@ngrx/store";
import { Maybe, UserContextEntity } from "src/schema/schema";

export interface PortalFriendsState {
  allUsers?: Maybe<UserContextEntity[]>,
}

export const initialState: PortalFriendsState = { };

export const portalFriendsReducer = createReducer(
  initialState,

);