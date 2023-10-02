import { createReducer, on } from '@ngrx/store';
import { DealCategoryEntity, Maybe } from 'src/app/core/api/generated/schema';
import { DealFilterQueryDefinition, DealFilterQueryParams } from 'src/app/core/typings/filter-params/deal-filter-param';
import { DealFilterActions } from './deal-filter.actions';

export interface DealFilterState {
  categories?: Maybe<DealCategoryEntity[]>,
  params?: DealFilterQueryParams,
}

export const initialState: DealFilterState = { };

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
