import { createReducer, on } from '@ngrx/store';
import { Maybe, UserContextEntity } from 'src/schema/schema';

import { PortalSettingsActions } from './portal-settings.actions';

export interface PortalSettingsState {
  savedUser?: Maybe<UserContextEntity>;
}

export const initialState: PortalSettingsState = {};

export const portalSettingsReducer = createReducer(
  initialState,

  on(PortalSettingsActions.savePersonalData, (state, action): PortalSettingsState => (
    { ...state, savedUser: action.entity }
  )),

);
