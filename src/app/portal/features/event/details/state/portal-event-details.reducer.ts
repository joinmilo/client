import { createReducer, on } from '@ngrx/store';
import { EventCommentEntity, EventEntity, EventScheduleEntity, Maybe } from 'src/schema/schema';
import { PortalEventDetailsActions } from './portal-event-details.actions';

export interface PortalEventDetailsState {
  comments?: Maybe<EventCommentEntity[]>,
  details?: Maybe<EventEntity>,
  schedules?: Maybe<EventScheduleEntity[]>,
  savedEventComment?: Maybe<EventCommentEntity>
}

export const initialState: PortalEventDetailsState = {
};

export const portalEventDetailsReducer = createReducer(
  initialState,

  on(
    PortalEventDetailsActions.setDetails,
    PortalEventDetailsActions.detailsUpdated,
    (state, action): PortalEventDetailsState => 
      ({ ...state, details: action.event })
  ),

  on(PortalEventDetailsActions.setComments, (state, action): PortalEventDetailsState => (
    { ...state, comments: action.comments}
  )),

  on(PortalEventDetailsActions.setSchedules, (state, action): PortalEventDetailsState => (
    { ...state, schedules: action.schedules }
  )),

  on(PortalEventDetailsActions.eventCommentSaved, (state, action): PortalEventDetailsState => (
    { ...state, savedEventComment: action.entity }
  )),
);
