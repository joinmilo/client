import {createReducer, on} from '@ngrx/store';
import {
  DealCategoryEntity, DealEntity,
  EventCategoryEntity,
  EventEntity,
  EventTargetGroupEntity, OrganisationEntity,
  SuburbEntity
} from 'src/schema/schema';
import {MapFeatureActions} from './map.actions';
import {dealsFilterKey, eventFilterKey, oraganisationsFilterKey} from '../constants/map.constants'

type FilterKey = typeof  eventFilterKey
  | typeof dealsFilterKey
  | typeof oraganisationsFilterKey;

export interface MapState {
  activeFilter: FilterKey;

  eventFilterOptions?: {
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
    rating: number
    suburbId: string
  }
  organisations?: OrganisationEntity[]

  dealFilterOptions?: {
    categories: DealCategoryEntity[]
    suburbs: SuburbEntity[]
  }
  dealFilter?: {
    categoryId: string
    suburbId: string,
    isOffer: boolean
  }
  deals?: DealEntity[]
}

export const initialState: MapState = {
  activeFilter: eventFilterKey,
  organisationFilterOptions: {
    ratings: [1, 2, 3, 4, 5],
  }
};

export const mapReducer = createReducer(
  initialState,

  on(MapFeatureActions.setFilterOptions, (state, action): MapState => ({
    ...state,
    eventFilterOptions: {
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
  }))
)
