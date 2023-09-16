import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { DealAdminDetailsFavoritesActions } from './deal-admin-details-favorites.actions';

export interface DealAdminDetailsFavoritesState {
  comments?: PageableList_UserContextEntity,
  period?: Period,
  slug?: Maybe<string>,
  params : FilterSortPaginateInput
}

export const initialState: DealAdminDetailsFavoritesState = {
  params:{}
};

export const dealAdminDetailsFavoritesReducer = createReducer(
  initialState,

  on(DealAdminDetailsFavoritesActions.updateParams, (state, action): DealAdminDetailsFavoritesState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(DealAdminDetailsFavoritesActions.updateParams, (state, action): DealAdminDetailsFavoritesState => (
    { ...state, period: Object.assign({ ...state.period } || {}, action.period) }
  )),

  on(DealAdminDetailsFavoritesActions.updateParams, (state, action): DealAdminDetailsFavoritesState => (
    { ...state, slug: action.slug }
  )),

  on(DealAdminDetailsFavoritesActions.setFavorites, (state, action): DealAdminDetailsFavoritesState => (
    { ...state, comments: action.comments }
  )),
);
