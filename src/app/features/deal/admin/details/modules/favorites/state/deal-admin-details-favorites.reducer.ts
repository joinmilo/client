import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';
import { DealAdminDetailsFavoritesActions } from './deal-admin-details-favorites.actions';

export interface DealAdminDetailsFavoritesState {
  comments?: PageableList_UserContextEntity,
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
    { ...state, slug: action.slug }
  )),

  on(DealAdminDetailsFavoritesActions.setFavorites, (state, action): DealAdminDetailsFavoritesState => (
    { ...state, comments: action.comments }
  )),
);
