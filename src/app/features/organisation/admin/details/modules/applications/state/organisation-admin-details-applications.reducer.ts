import { createReducer, on } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_OrganisationMemberEntity } from 'src/app/core/api/generated/schema';
import { OrganisationAdminDetailsApplicationsActions } from './organisation-admin-details-applications.actions';

export interface OrganisationAdminDetailsApplicationsState {
  members?: PageableList_OrganisationMemberEntity,
  slug?: Maybe<string>,
  params : FilterSortPaginateInput
}

export const initialState: OrganisationAdminDetailsApplicationsState = {
  params:{}
};

export const organisationAdminDetailsApplicationsReducer = createReducer(
  initialState,

  on(OrganisationAdminDetailsApplicationsActions.updateParams, (state, action): OrganisationAdminDetailsApplicationsState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(OrganisationAdminDetailsApplicationsActions.updateParams, (state, action): OrganisationAdminDetailsApplicationsState => (
    { ...state, slug: action.slug }
  )),

  on(OrganisationAdminDetailsApplicationsActions.setMembers, (state, action): OrganisationAdminDetailsApplicationsState => (
    { ...state, members: action.members }
  )),
);
