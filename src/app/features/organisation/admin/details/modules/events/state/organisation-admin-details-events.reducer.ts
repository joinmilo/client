import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';
import { OrganisationAdminDetailsEventsActions } from './organisation-admin-details-events.actions';

export interface OrganisationAdminDetailsEventsState {
  comments?: PageableList_UserContextEntity,
  slug?: Maybe<string>,
  params : FilterSortPaginateInput
}

export const initialState: OrganisationAdminDetailsEventsState = {
  params:{}
};

export const organisationAdminDetailsEventsReducer = createReducer(
  initialState,

  on(OrganisationAdminDetailsEventsActions.updateParams, (state, action): OrganisationAdminDetailsEventsState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(OrganisationAdminDetailsEventsActions.updateParams, (state, action): OrganisationAdminDetailsEventsState => (
    { ...state, slug: action.slug }
  )),

  on(OrganisationAdminDetailsEventsActions.setEvents, (state, action): OrganisationAdminDetailsEventsState => (
    { ...state, comments: action.comments }
  )),
);
