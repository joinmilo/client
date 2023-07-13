import { createReducer, on } from '@ngrx/store';
import { DealEntity, Maybe } from 'src/schema/schema';
import { PortalDealDetailsActions } from './portal-deal-details.actions';

export interface PortalDealDetailsState {
  details?: Maybe<DealEntity>,
}

export const initialState: PortalDealDetailsState = {
};

export const portalDealDetailsReducer = createReducer(
  initialState,

  on(
    PortalDealDetailsActions.setDetails,
    (state, action): PortalDealDetailsState => 
      ({ ...state, details: action.deal })
  ),

);
