import { createReducer, on } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { OrganisationEntity } from 'src/schema/schema';
import { PortalParticipateActions } from './portal-participate.actions';


export interface PortalParticipateState {
  filteredOrganisations?: Maybe<OrganisationEntity[]>;
}

export const initialState: PortalParticipateState = {
};

export const portalParticipateReducer = createReducer(
  initialState,

  on(PortalParticipateActions.setOrganisations, (state, action): PortalParticipateState => (
    { ...state, filteredOrganisations: action.filteredOrganisations}
  )),

);
