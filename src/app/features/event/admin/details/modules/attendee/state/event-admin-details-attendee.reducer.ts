import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_EventAttendeeEntity } from 'src/app/core/api/generated/schema';
import { EventAdminDetailsAttendeeActions } from './event-admin-details-attendee.actions';


export interface EventAdminDetailsAttendeeState {
  attendees?: PageableList_EventAttendeeEntity,
  slug?: Maybe<string>;
  params: FilterSortPaginateInput
}

export const initialState: EventAdminDetailsAttendeeState = {
  params: {}
};

export const eventAdminDetailsAttendeeReducer = createReducer(
  initialState,

  on(EventAdminDetailsAttendeeActions.updateParams, (state, action): EventAdminDetailsAttendeeState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(EventAdminDetailsAttendeeActions.setAttendees, (state, action): EventAdminDetailsAttendeeState => (
    { ...state, attendees: action.attendees }
  )),

  on(EventAdminDetailsAttendeeActions.updateParams, (state, action): EventAdminDetailsAttendeeState => (
    { ...state, slug: action.slug }
  )),
);
