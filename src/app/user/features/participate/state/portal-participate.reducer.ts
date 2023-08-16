import { createReducer } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { PrivilegeApplicationEntity } from 'src/schema/schema';


export interface PortalParticipateState {
  savedPrivilegeApplication?: Maybe<PrivilegeApplicationEntity>;

}

export const initialState: PortalParticipateState = {
};

export const portalParticipateReducer = createReducer(
  initialState,



);
