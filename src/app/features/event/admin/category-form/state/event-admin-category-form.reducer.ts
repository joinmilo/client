import { createReducer, on } from '@ngrx/store';
import { EventCategoryEntity, Maybe } from 'src/app/core/api/generated/schema';
import { EventAdminCategoryFormActions } from './event-admin-category-form.actions';

export interface EventCategoryAdminFormState {
  editEventCategory?: Maybe<EventCategoryEntity>;
}

export const initialState: EventCategoryAdminFormState = {
};

export const eventAdminFormReducer = createReducer(
  initialState,

  on(EventAdminCategoryFormActions.categoryRetrieved, (state, action): EventCategoryAdminFormState => (
    { ...state, editEventCategory: action.entity }
  )),

  on(
    EventAdminCategoryFormActions.saved,
    EventAdminCategoryFormActions.cancelled,
    (state): EventCategoryAdminFormState => (
      { ...state, editEventCategory: undefined }
    )
  ),

);
