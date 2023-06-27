import { createReducer, on } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { DealFilterQueryDefinition, DealFilterQueryParams } from 'src/app/core/typings/filter-params/deal-filter-param';
import { DealCategoryEntity } from 'src/schema/schema';
import { DealFilterActions } from './deal-filter.actions';

export interface DealFilterState {
  categories?: Maybe<DealCategoryEntity[]>,
  params: DealFilterQueryParams,
}

export const initialState: DealFilterState = {
  params: {}
};

export const dealFilterReducer = createReducer(
  initialState,

  on(DealFilterActions.allUpdated, (state, action): DealFilterState => (
    { ...state, params: action.params }
  )),

  on(DealFilterActions.clearAll, (state): DealFilterState => (
    { ...state, params: {} }
  )),

  on(DealFilterActions.setCategories, (state, action): DealFilterState => (
    { ...state, categories: action.result }
  )),

  on(DealFilterActions.selectedCategories, (state, action): DealFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [DealFilterQueryDefinition.dealCategories]: action.categoryIds
      }
    }
  )),

  on(DealFilterActions.selectedOfferOnly, (state, action): DealFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [DealFilterQueryDefinition.offerOnly]: action.value
      }
    }
  )),

  on(DealFilterActions.selectedSearchOnly, (state, action): DealFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [DealFilterQueryDefinition.searchOnly]: action.value
      }
    }
  )),

);
