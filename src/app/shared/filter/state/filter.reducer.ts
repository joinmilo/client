import { createReducer, on } from '@ngrx/store';
import { EventCategoryEntity, EventTargetGroupEntity, Maybe } from 'src/schema/schema';
import { FilterQueryParams } from '../constants/filter.constants';
import { OverviewFilterQueryParams } from '../typings/query-param';
import { FilterActions } from './filter.actions';

export interface FilterState {
  eventCategories?: Maybe<EventCategoryEntity[]>,
  targetGroups?: Maybe<EventTargetGroupEntity[]>,
  params?: OverviewFilterQueryParams,
}

export const initialState: FilterState = { };

export const filterReducer = createReducer(
  initialState,

  on(FilterActions.initialized, (state, action): FilterState => (
    { ...state, params: action.params }
  )),

  on(FilterActions.clearAll, (state): FilterState => (
    { ...state, params: undefined }
  )),

  on(FilterActions.setEventCategories, (state, action): FilterState => (
    { ...state, eventCategories: action.result }
  )),

  on(FilterActions.selectedEventCategories, (state, action): FilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [FilterQueryParams.categories]: action.categoryIds
      }
    }
  )),

  on(FilterActions.setTargetGroups, (state, action): FilterState => (
    { ...state, targetGroups: action.result }
  )),

  on(FilterActions.selectedTargetGroups, (state, action): FilterState => (
    { ...state,
      params: {...state.params,
        [FilterQueryParams.targetGroups]: action.targetGroupIds
      } 
    }
  )),

);
