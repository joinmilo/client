import {createReducer, on} from '@ngrx/store';
import {
  DealCategoryEntity,
  DealEntity,
  EventCategoryEntity,
  EventEntity,
  EventTargetGroupEntity,
  OrganisationEntity,
  SuburbEntity
} from 'src/schema/schema';
import {MapFeatureActions} from './map.actions';
import {FilterKey} from '../constants/map.constants'

export interface MapState {
  activeFilter: FilterKey;

  eventsFilterOptions?: {
    categories: EventCategoryEntity[]
    targetGroups: EventTargetGroupEntity[]
    suburbs: SuburbEntity[]
  }
  eventFilter?: {
    categoryId?: string,
    targetGroupId?: string,
    suburbId?: string
    daterange?: {
      start: Date
      end: Date
    },
    showOnlyFreeOfCharge?: boolean,
    showPastEvents?: boolean
  }
  events?: EventEntity[]

  organisationFilterOptions: {
    ratings: number[]
    suburbs?: SuburbEntity[]
  }
  organisationFilter?: {
    rating?: number
    suburbId?: string
  }
  organisations?: OrganisationEntity[]

  dealFilterOptions?: {
    categories: DealCategoryEntity[]
    suburbs: SuburbEntity[]
  }
  dealFilter?: {
    categoryId?: string
    suburbId?: string,
    isOffer?: boolean
  }
  deals?: DealEntity[]
}

export const initialState: MapState = {
  activeFilter: FilterKey.events,
  organisationFilterOptions: {
    ratings: [1, 2, 3, 4, 5],
  }
};

export const mapReducer = createReducer(
  initialState,

  on(MapFeatureActions.setActiveFilter, (state, action): MapState => ({
    ...state,
    activeFilter: action.key
  })),

  on(MapFeatureActions.setFilterOptions, (state, action): MapState => ({
    ...state,
    eventsFilterOptions: {
      categories: action.eventCategories,
      targetGroups: action.targetGroups,
      suburbs: action.suburbs
    },
    organisationFilterOptions: {
      ratings: state.organisationFilterOptions.ratings,
      suburbs: action.suburbs
    },
    dealFilterOptions: {
      categories: action.dealCategories,
      suburbs: action.suburbs
    }
  })),

  on(MapFeatureActions.setEventFilter, (state, action): MapState => ({
    ...state,
    eventFilter: {
      categoryId: action.categoryId,
      targetGroupId: action.targetGroupId
    }
  })),

  on(MapFeatureActions.setEvents, (state, action): MapState => ({
    ...state,
    events: action.events
  })),

  on(MapFeatureActions.setOrganisationFilter, (state, action): MapState => ({
    ...state,
    organisationFilter: {
      suburbId: action.suburbId,
      rating: action.rating
    }
  })),

  on(MapFeatureActions.setOrganisations, (state, action): MapState => ({
    ...state,
    organisations: action.organisations
  })),

  on(MapFeatureActions.setDealFilter, (state, action): MapState => ({
    ...state,
    dealFilter: {
      categoryId: action.categoryId,
      suburbId: action.suburbId,
      isOffer: action.isOffer
    }
  })),

  on(MapFeatureActions.setDeals, (state, action): MapState => ({
    ...state,
    deals: action.deals
  }))
)
