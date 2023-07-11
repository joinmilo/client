import { createReducer, on } from '@ngrx/store';
import { DealEntity, EventEntity, Maybe, OrganisationEntity } from 'src/schema/schema';
import { MapPageFeatureActions } from './map-page-feature.actions';

export interface MapPageFeatureState {
  sponsoredDeal?: Maybe<DealEntity>,
  sponsoredEvent?: Maybe<EventEntity>,
  sponsoredOrganisation?: Maybe<OrganisationEntity>,
}

export const initialState: MapPageFeatureState = { };

export const mapPageFeatureReducer = createReducer(
  initialState,

  on(MapPageFeatureActions.setSponsoredEvent, (state, action): MapPageFeatureState => (
    { ...state, sponsoredEvent: action.event }
  )),

  on(MapPageFeatureActions.setSponsoredDeal, (state, action): MapPageFeatureState => (
    { ...state, sponsoredDeal: action.deal }
  )),

  on(MapPageFeatureActions.setSponsoredOrganisation, (state, action): MapPageFeatureState => (
    { ...state, sponsoredOrganisation: action.organisation }
  )),

);
