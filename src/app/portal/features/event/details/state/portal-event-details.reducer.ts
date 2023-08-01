import { createReducer, on } from '@ngrx/store';
import { EventCommentEntity, EventEntity, EventMediaEntity, EventScheduleEntity, Maybe } from 'src/schema/schema';
import { PortalEventDetailsActions } from './portal-event-details.actions';

export interface PortalEventDetailsState {
  comments?: Maybe<EventCommentEntity[]>,
  details?: Maybe<EventEntity>,
  media?: Maybe<EventMediaEntity[]>,
  schedules?: Maybe<EventScheduleEntity[]>,
  savedComment?: Maybe<EventCommentEntity>,
}

export const initialState: PortalEventDetailsState = {
};

export const portalEventDetailsReducer = createReducer(
  initialState,

  on(
    PortalEventDetailsActions.setDetails,
    PortalEventDetailsActions.detailsUpdated,
    (state, action): PortalEventDetailsState => ({ 
      ...state, details: action.event }
    )
  ),

  on(PortalEventDetailsActions.setComments, (state, action): PortalEventDetailsState => (
    { ...state, comments: action.comments}
  )),

  on(PortalEventDetailsActions.setSchedules, (state, action): PortalEventDetailsState => (
    { ...state, schedules: action.schedules }
  )),

  on(PortalEventDetailsActions.commentSaved, (state, action): PortalEventDetailsState => (
    { ...state, savedComment: action.entity }
  )),
);
