import { createReducer, on } from '@ngrx/store';
import { EventCategoryEntity, EventEntity, Maybe, OrganisationEntity } from 'src/app/core/api/generated/schema';
import { EventAdminFormActions } from './event-admin-form.actions';

export interface EventAdminFormState {
  event?: Maybe<EventEntity>,
  categories?: Maybe<EventCategoryEntity[]>,
  userOrganisations?: Maybe<OrganisationEntity[]>
}

export const initialState: EventAdminFormState = { };

export const eventAdminFormReducer = createReducer(
  initialState,

  on(EventAdminFormActions.eventRetrieved, (state, action): EventAdminFormState => (
    { ...state, event: action.event }
  )),

  on(EventAdminFormActions.setCategories, (state, action): EventAdminFormState => (
    { ...state, categories: action.categories }
  )),

  on(EventAdminFormActions.setUserOrganisations, (state, action): EventAdminFormState => (
    { ...state, userOrganisations: action.organisations }
  )),
);
