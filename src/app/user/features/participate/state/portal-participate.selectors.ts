import { createFeatureSelector } from '@ngrx/store';
import { portalParticipateStateKey } from '../constants/portal-participate.constants';
import { PortalParticipateState } from './portal-participate.reducer';

export const selectPortalParticipateState = createFeatureSelector<PortalParticipateState>(portalParticipateStateKey);

