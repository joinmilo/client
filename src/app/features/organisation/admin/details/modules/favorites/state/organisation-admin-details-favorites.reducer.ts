import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';
import { OrganisationAdminDetailsFavoritesActions } from './organisation-admin-details-favorites.actions';

export interface OrganisationAdminDetailsFavoritesState {
  comments?: PageableList_UserContextEntity,
  slug?: Maybe<string>,
  params : FilterSortPaginateInput
}

export const initialState: OrganisationAdminDetailsFavoritesState = {
  params:{}
};

export const organisationAdminDetailsFavoritesReducer = createReducer(
  initialState,

  on(OrganisationAdminDetailsFavoritesActions.updateParams, (state, action): OrganisationAdminDetailsFavoritesState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(OrganisationAdminDetailsFavoritesActions.updateParams, (state, action): OrganisationAdminDetailsFavoritesState => (
    { ...state, slug: action.slug }
  )),

  on(OrganisationAdminDetailsFavoritesActions.setFavorites, (state, action): OrganisationAdminDetailsFavoritesState => (
    { ...state, comments: action.comments }
  )),
);
