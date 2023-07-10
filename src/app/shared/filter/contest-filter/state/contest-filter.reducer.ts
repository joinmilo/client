import { createReducer, on } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ContestFilterQueryDefinition, ContestFilterQueryParams } from 'src/app/core/typings/filter-param';
import { ContestTypeEntity } from 'src/schema/schema';
import { ContestFilterActions } from './contest-filter.actions';

export interface ContestFilterState {
  types?: Maybe<ContestTypeEntity[]>,
  params: ContestFilterQueryParams,
}

export const initialState: ContestFilterState = {
  params: {}
};

export const contestFilterReducer = createReducer(
  initialState,

  on(ContestFilterActions.allUpdated, (state, action): ContestFilterState => (
    { ...state, params: action.params }
  )),

  on(ContestFilterActions.clearAll, (state): ContestFilterState => (
    { ...state, params: {} }
  )),

  on(ContestFilterActions.setTypes, (state, action): ContestFilterState => (
    { ...state, types: action.result }
  )),

  on(ContestFilterActions.selectedTypes, (state, action): ContestFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [ContestFilterQueryDefinition.contestTypes]: action.typeIds
      }
    }
  )),
)