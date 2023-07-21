import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_ArticleEntity, PageableList_DealEntity, PageableList_EventEntity, PageableList_OrganisationEntity, PageableList_UserContextEntity } from 'src/schema/schema';
import { PortalFavoritesActions } from './portal-favorites.actions';


export interface PortalFavoritesState {
  params: FilterSortPaginateInput,
  favoriteArticles?: PageableList_ArticleEntity,
  favoriteAuthors?: PageableList_UserContextEntity,
  favoriteDeals?: PageableList_DealEntity,
  favoriteEvents?: PageableList_EventEntity,
  favoriteOrganisations?: PageableList_OrganisationEntity,
}

export const initialState: PortalFavoritesState = {
  params: {}
};

export const portalFavoritesReducer = createReducer(
  initialState,

  on(PortalFavoritesActions.setFavoriteArticles, (state, action): PortalFavoritesState => (
    { ...state, favoriteArticles: action.articles }
  )),

  on(PortalFavoritesActions.setFavoriteAuthors, (state, action): PortalFavoritesState => (
    { ...state, favoriteAuthors: action.authors }
  )),

  on(PortalFavoritesActions.setFavoriteDeals, (state, action): PortalFavoritesState => (
    { ...state, favoriteDeals: action.deals }
  )),

  on(PortalFavoritesActions.setFavoriteEvents, (state, action): PortalFavoritesState => (
    { ...state, favoriteEvents: action.events }
  )),

  on(PortalFavoritesActions.setFavoriteOrganisations, (state, action): PortalFavoritesState => (
    { ...state, favoriteOrganisations: action.organisations }
  )),
);
