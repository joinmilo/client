import { createReducer, on } from '@ngrx/store';
import { AppEntity, Maybe, SocialMediaEntity } from 'src/schema/schema';
import { PortalFooterActions } from './portal-footer.actions';

export interface PortalFooterState {
  apps?: Maybe<AppEntity[]>,
  socialMedia?: Maybe<SocialMediaEntity[]>,
}

export const initialState: PortalFooterState = {
};

export const portalFooterReducer = createReducer(
  initialState,

  on(PortalFooterActions.setApps, (state, action): PortalFooterState => (
    { ...state, apps: action.apps }
  )),

  on(PortalFooterActions.setSocialMedia, (state, action): PortalFooterState => (
    { ...state, socialMedia: action.socialMedia }
  )),

);
