import { createReducer, on } from '@ngrx/store';
import { FilterQueryDefinition } from 'src/app/core/typings/filter-params/filter-param';
import { InfoMediaCategoryEntity, Maybe } from 'src/schema/schema';
import { MediaFilterQueryDefinition, MediaFilterQueryParams } from 'src/app/core/typings/filter-params/media-filter-param';
import { MediaFilterActions } from './media-filter.actions';

export interface MediaFilterState {
  categories?: Maybe<InfoMediaCategoryEntity[]>,
  params?: MediaFilterQueryParams,
}

export const initialState: MediaFilterState = { };

export const mediaFilterReducer = createReducer(
  initialState,

  on(MediaFilterActions.allUpdated, (state, action): MediaFilterState => (
    { ...state, params: action.params }
  )),

  on(MediaFilterActions.clearAll, (state): MediaFilterState => (
    { ...state, params: {} }
  )),

  on(MediaFilterActions.setCategories, (state, action): MediaFilterState => (
    { ...state, categories: action.result }
  )),

  on(MediaFilterActions.selectedCategories, (state, action): MediaFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [MediaFilterQueryDefinition.mediaCategories]: action.categoryIds
      }
    }
  )),

  on(MediaFilterActions.selectedMediaTypes, (state, action): MediaFilterState => (
    {
      ...state,
      params: {
        ...state.params,
        [MediaFilterQueryDefinition.mediaTypes]: action.mimeTypes
      }
    }
  ))
);
