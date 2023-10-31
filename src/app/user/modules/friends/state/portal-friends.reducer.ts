import { createReducer, on } from '@ngrx/store';
import { Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { PortalFriendsActions } from './portal-friends.actions';

export interface PortalFriendsState {
  filteredUsers?: Maybe<UserContextEntity[]>,
  update?: Maybe<UserContextEntity[]>
}

export const initialState: PortalFriendsState = { };

export const portalFriendsReducer = createReducer(
  initialState,

  on(PortalFriendsActions.setUsers, (state, action): PortalFriendsState => (
    { ...state, filteredUsers: action.filteredUsers }
  )),
);