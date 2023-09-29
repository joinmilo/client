import { createReducer, on } from '@ngrx/store';
import { EventTargetGroupEntity, Maybe } from 'src/app/core/api/generated/schema';
import { EventAdminTargetGroupFormActions } from './event-admin-target-group-form.actions';


export interface EventTargetGroupAdminFormState {
  editEventTargetGroup?: Maybe<EventTargetGroupEntity>;
}

export const initialState: EventTargetGroupAdminFormState = {
};

export const eventAdminFormReducer = createReducer(
  initialState,

  on(EventAdminTargetGroupFormActions.targetGroupRetrieved, (state, action): EventTargetGroupAdminFormState => (
    { ...state, editEventTargetGroup: action.entity }
  )),

  on(
    EventAdminTargetGroupFormActions.saved,
    EventAdminTargetGroupFormActions.cancelled,
    (state): EventTargetGroupAdminFormState => (
      { ...state, editEventTargetGroup: undefined }
    )
  ),

);
