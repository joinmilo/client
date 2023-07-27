import { createReducer, on } from '@ngrx/store';
import { Maybe, PageEntity } from 'src/schema/schema';
import { PortalMainActions } from './portal-main.actions';

export interface PortalMainState {
  page?: Maybe<PageEntity>,
  landingPage?: Maybe<PageEntity>,
}

export const initialState: PortalMainState = { };

export const portalMainReducer = createReducer(
  initialState,

  on(PortalMainActions.setCurrentPage, (state, action): PortalMainState => (
    { ...state, page: action.page }
  )),

  on(PortalMainActions.setLandingPage, (state, action): PortalMainState => (
    { ...state, landingPage: action.page }
  )),

);
