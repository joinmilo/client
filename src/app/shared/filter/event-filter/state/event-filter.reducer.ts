import { createReducer, on } from '@ngrx/store';
import { EventFilterQueryDefinition, EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { EventCategoryEntity, EventTargetGroupEntity, Maybe, SuburbEntity } from 'src/schema/schema';
import { EventFilterActions } from './event-filter.actions';

export interface EventFilterState {
  categories?: Maybe<EventCategoryEntity[]>,
  suburbs?: Maybe<SuburbEntity[]>,
  targetGroups?: Maybe<EventTargetGroupEntity[]>,
  params: EventFilterQueryParams,
}

export const initialState: EventFilterState = {
  params: {}
};

export const eventFilterReducer = createReducer(
  initialState,

  on(EventFilterActions.allUpdated, (state, action): EventFilterState => (
    { ...state, params: action.params }
  )),

  on(EventFilterActions.clearAll, (state): EventFilterState => (
    { ...state, params: {} }
  )),

  on(EventFilterActions.setCategories, (state, action): EventFilterState => (
    { ...state, categories: action.result }
  )),

  on(EventFilterActions.selectedCategories, (state, action): EventFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [EventFilterQueryDefinition.eventCategories]: action.categoryIds
      }
    }
  )),

  on(EventFilterActions.selectedSuburbs, (state, action): EventFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [FilterQueryDefinition.suburbs]: action.suburbIds
      }
    }
  )),

  on(EventFilterActions.setTargetGroups, (state, action): EventFilterState => (
    { ...state, targetGroups: action.result }
  )),

  on(EventFilterActions.selectedTargetGroups, (state, action): EventFilterState => (
    { ...state,
      params: {...state.params,
        [EventFilterQueryDefinition.targetGroups]: action.targetGroupIds
      } 
    }
  )),

  on(EventFilterActions.selectedFreeOnly, (state, action): EventFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [EventFilterQueryDefinition.freeOnly]: action.value
      }
    }
  )),

  on(EventFilterActions.selectedPast, (state, action): EventFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [EventFilterQueryDefinition.past]: action.value
      }
    }
  )),

  on(EventFilterActions.selectedPeriod, (state, action): EventFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [FilterQueryDefinition.startDate]: action.period?.startDate.toISOString(),
        [FilterQueryDefinition.endDate]: action.period?.endDate.toISOString()
      }
    }
  )),

);
