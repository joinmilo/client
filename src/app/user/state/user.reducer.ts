import { createReducer, on } from '@ngrx/store';
import { Maybe } from 'src/schema/schema';
import { UserEntity } from '../../../schema/schema';
import { UserActions } from './user.actions';

export interface UserState {
  user?: Maybe<UserEntity>,
  verified?: Maybe<boolean>,
  token?: Maybe<string>,
}

export const initialState: UserState = {
};

export const userReducer = createReducer(
  initialState,

  on(UserActions.verified, (state, action): UserState => (
    { ...state, verified: action.verified}
  )),

  on(UserActions.registered, (state, action): UserState => (
    { ...state, user: action.entity }
  )),

);
