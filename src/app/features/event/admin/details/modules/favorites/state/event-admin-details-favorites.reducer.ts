import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';
import { EventAdminDetailsFavoritesActions } from './event-admin-details-favorites.actions';

export interface EventAdminDetailsFavoritesState {
  comments?: PageableList_UserContextEntity,
  slug?: Maybe<string>,
  params : FilterSortPaginateInput
}

export const initialState: EventAdminDetailsFavoritesState = {
  params:{}
};

export const eventAdminDetailsFavoritesReducer = createReducer(
  initialState,

  on(EventAdminDetailsFavoritesActions.updateParams, (state, action): EventAdminDetailsFavoritesState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(EventAdminDetailsFavoritesActions.updateParams, (state, action): EventAdminDetailsFavoritesState => (
    { ...state, slug: action.slug }
  )),

  on(EventAdminDetailsFavoritesActions.setFavorites, (state, action): EventAdminDetailsFavoritesState => (
    { ...state, comments: action.comments }
  )),
);
