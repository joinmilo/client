import { createReducer, on } from '@ngrx/store';
import { InfoMediaCategoryEntity, Maybe } from 'src/app/core/api/generated/schema';
import { MediaAdminCategoryFormActions } from './media-admin-category-form.actions';


export interface MediaCategoryAdminFormState {
  editMediaCategory?: Maybe<InfoMediaCategoryEntity>;
}

export const initialState: MediaCategoryAdminFormState = {
};

export const mediaAdminFormReducer = createReducer(
  initialState,

  on(MediaAdminCategoryFormActions.categoryRetrieved, (state, action): MediaCategoryAdminFormState => (
    { ...state, editMediaCategory: action.entity }
  )),

  on(
    MediaAdminCategoryFormActions.saved,
    MediaAdminCategoryFormActions.cancelled,
    (state): MediaCategoryAdminFormState => (
      { ...state, editMediaCategory: undefined }
    )
  ),

);
