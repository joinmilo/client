import { createReducer, on } from '@ngrx/store';
import { FeatureEntity, Maybe, PageableList_AddressEntity } from 'src/app/core/api/generated/schema';
import { AdminMenuItem, AdminRoutes } from '../typings/menu';
import { AdminActions } from './admin.actions';

export interface AdminState {
  features?: Maybe<FeatureEntity[]>,
  menuOpen?: boolean,
  mainRoutes: AdminRoutes[],
  settingsMenu: AdminMenuItem[],
  addresses?: PageableList_AddressEntity
}

export const initialState: AdminState = {
  mainRoutes: [],
  settingsMenu: [],
};

export const adminReducer = createReducer(
  initialState,

  on(AdminActions.openMenu, (state): AdminState => (
    { ...state, menuOpen: true }
  )),

  on(AdminActions.closeMenu, (state): AdminState => (
    { ...state, menuOpen: false }
  )),

  on(AdminActions.addMainRoutes, (state, action): AdminState => (
    { ...state, mainRoutes: [...state.mainRoutes, action.routes] }
  )),

  on(AdminActions.addSettingsMenu, (state, action): AdminState => (
    { ...state, settingsMenu: [...state.settingsMenu, action.item] }
  )),

  on(AdminActions.setFeatures, (state, action): AdminState => (
    { ...state, features: action.features }
  )),

);
