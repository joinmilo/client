import { createReducer, on } from '@ngrx/store';
import { AppEntity, Maybe, MenuItemEntity, SocialMediaEntity } from 'src/schema/schema';
import { UserEntity } from './../../../../schema/schema';
import { CommonActions } from './common.actions';

export interface CommonState {
  apps?: Maybe<AppEntity[]>,
  menu?: Maybe<MenuItemEntity[]>,
  socialMedia?: Maybe<SocialMediaEntity[]>,
  user?: Maybe<UserEntity>,
}

export const initialState: CommonState = {
};

export const commonReducer = createReducer(
  initialState,

  on(CommonActions.setApps, (state, action): CommonState => (
    { ...state, apps: action.apps }
  )),

  on(CommonActions.setMenu, (state, action): CommonState => (
    { ...state, menu: action.menuItems }
  )),

  on(CommonActions.setSocialMedia, (state, action): CommonState => (
    { ...state, socialMedia: action.socialMedia }
  )),

  on(CommonActions.userSaved, (state, action): CommonState => (
    { ...state, user: action.entity }
  )),
);
