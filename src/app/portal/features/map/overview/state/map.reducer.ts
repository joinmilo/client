import { createReducer, on } from '@ngrx/store';
import { FilterKey } from 'src/app/core/typings/filter-params/map-filter-param';
import { CardData, CardEntity } from 'src/app/shared/card/typings/card';
import { DealEntity, EventEntity, FilterSortPaginateInput, OrganisationEntity } from 'src/schema/schema';
import { PointOfInterest } from '../typings/point-of-interest';
import { MapFeatureActions } from './map.actions';

export interface MapState {
  activeFilter: FilterKey;
  filterParams: FilterSortPaginateInput;

  events?: EventEntity[]
  organisations?: OrganisationEntity[]
  deals?: DealEntity[]

  searchResults?: {
    count: number,
    label: string,
    labelPlural: string,
    entity: CardEntity,
    data: CardData[],
  }

  pois: PointOfInterest[],
}

export const initialState: MapState = {
  activeFilter: FilterKey.events,
  pois: [],
  filterParams: {}
};

export const mapReducer = createReducer(
  initialState,

  on(MapFeatureActions.setActiveFilter, (state, action): MapState => ({
    ...state,
    activeFilter: action.key
  })),

  on(MapFeatureActions.setEvents, (state, action): MapState => ({
    ...state,
    events: action.events
  })),

  on(MapFeatureActions.setOrganisations, (state, action): MapState => ({
    ...state,
    organisations: action.organisations
  })),

  on(MapFeatureActions.setDeals, (state, action): MapState => ({
    ...state,
    deals: action.deals
  })),

  on(MapFeatureActions.setResults, (state, action): MapState => ({
    ...state,
    searchResults: { ...action }
  })),

  on(MapFeatureActions.setPois, (state, action): MapState => ({
    ...state,
    pois: action.pois
  })),
)
