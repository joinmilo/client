import { createReducer, on } from '@ngrx/store';
import { Maybe, OrganisationEntity } from 'src/app/core/api/generated/schema';
import { PortalParticipateActions } from './portal-participate.actions';


export interface PortalParticipateState {
  createOrganisation?: Maybe<OrganisationEntity>;
  filteredOrganisations?: Maybe<OrganisationEntity[]>;
}

export const initialState: PortalParticipateState = {
};

export const portalParticipateReducer = createReducer(
  initialState,

  on(PortalParticipateActions.setOrganisations, (state, action): PortalParticipateState => (
    { ...state, filteredOrganisations: action.filteredOrganisations}
  )),

  on(
    PortalParticipateActions.saved,
    PortalParticipateActions.cancelled,
    (state): PortalParticipateState => (
      { ...state, createOrganisation: undefined }
    )
  ),


);
