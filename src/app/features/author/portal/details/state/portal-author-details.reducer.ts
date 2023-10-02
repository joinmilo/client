import { createReducer, on } from '@ngrx/store';
import { Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { PortalAuthorDetailsActions } from './portal-author-details.actions';


export interface PortalAuthorDetailsState {
  details?: Maybe<UserContextEntity>
}

export const initialState: PortalAuthorDetailsState = {
};

export const authorReducer = createReducer(
  initialState,

  on(PortalAuthorDetailsActions.setDetails, (state, action): PortalAuthorDetailsState => (
    { ...state, details: action.author }
  )),

  on(PortalAuthorDetailsActions.reset, (): PortalAuthorDetailsState => (
    { ...initialState }
  )),
  
);
