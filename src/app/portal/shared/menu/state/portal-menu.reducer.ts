import { createReducer, on } from '@ngrx/store';
import { Maybe, MenuItemEntity } from 'src/schema/schema';
import { PortalMenuActions } from './portal-menu.actions';

export interface PortalMenuState {
  menu?: Maybe<MenuItemEntity[]>,
}

export const initialState: PortalMenuState = {
};

export const portalMenuReducer = createReducer(
  initialState,

  on(PortalMenuActions.setMenu, (state, action): PortalMenuState => (
    { ...state, menu: action.menuItems }
  )),

);
