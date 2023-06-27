import { createReducer, on } from '@ngrx/store';
import { EventCommentEntity, EventEntity, Maybe } from 'src/schema/schema';
import { PortalEventDetailsActions } from './portal-event-details.actions';

export interface PortalEventDetailsState {
  comments?: Maybe<EventCommentEntity[]>,
  details?: Maybe<EventEntity>,
}

export const initialState: PortalEventDetailsState = {
};

export const portalEventDetailsReducer = createReducer(
  initialState,

  on(PortalEventDetailsActions.setDetails, (state, action): PortalEventDetailsState => (
    { ...state, details: action.event }
  )),

  on(PortalEventDetailsActions.setComments, (state, action): PortalEventDetailsState => (
    { ...state, comments: action.comments}
  )),
);
