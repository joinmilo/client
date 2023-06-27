import { createReducer, on } from '@ngrx/store';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { OrganisationFilterQueryDefinition, OrganisationFilterQueryParams } from 'src/app/core/typings/filter-params/organisation-filter-param';
import { OrganisationFilterActions } from './organisation-filter.actions';

export interface OrganisationFilterState {
  params: OrganisationFilterQueryParams,
}

export const initialState: OrganisationFilterState = {
  params: {}
};

export const organisationFilterReducer = createReducer(
  initialState,

  on(OrganisationFilterActions.allUpdated, (state, action): OrganisationFilterState => (
    { ...state, params: action.params }
  )),

  on(OrganisationFilterActions.clearAll, (state): OrganisationFilterState => (
    { ...state, params: {} }
  )),

  on(OrganisationFilterActions.selectedSuburbs, (state, action): OrganisationFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [FilterQueryDefinition.suburbs]: action.suburbIds
      }
    }
  )),

  on(OrganisationFilterActions.selectedActiveOnly, (state, action): OrganisationFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [OrganisationFilterQueryDefinition.activeEvents]: action.value
      }
    }
  )),

);
