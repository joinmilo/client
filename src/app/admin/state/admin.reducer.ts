import { createReducer, on } from '@ngrx/store';
import { Maybe, PageableList_AddressEntity, PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminMenuItem, AdminRoutes } from '../typings/menu';
import { AdminActions } from './admin.actions';

export interface AdminState {
  features?: Maybe<PluginEntity[]>,
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
    { ...state, settingsMenu: [...state.settingsMenu, action.item]
      .filter((value, index, self) => index === self.findIndex((t) => t.name === value.name)) }
  )),

  on(AdminActions.setFeatures, (state, action): AdminState => (
    { ...state, features: action.features }
  )),

);
