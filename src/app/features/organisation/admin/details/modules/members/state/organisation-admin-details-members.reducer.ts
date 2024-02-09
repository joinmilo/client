import { createReducer, on } from '@ngrx/store';

import { Period } from 'ngx-cinlib/core';
import { FilterSortPaginateInput, Maybe, PageableList_OrganisationMemberEntity } from 'src/app/core/api/generated/schema';
import { OrganisationAdminDetailsMembersActions } from './organisation-admin-details-members.actions';

export interface OrganisationAdminDetailsMembersState {
  members?: PageableList_OrganisationMemberEntity,
  period?: Period,
  slug?: Maybe<string>,
  params : FilterSortPaginateInput
}

export const initialState: OrganisationAdminDetailsMembersState = {
  params:{}
};

export const organisationAdminDetailsMembersReducer = createReducer(
  initialState,

  on(OrganisationAdminDetailsMembersActions.updateParams, (state, action): OrganisationAdminDetailsMembersState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(OrganisationAdminDetailsMembersActions.updateParams, (state, action): OrganisationAdminDetailsMembersState => (
    { ...state, slug: action.slug }
  )),

  on(OrganisationAdminDetailsMembersActions.setMembers, (state, action): OrganisationAdminDetailsMembersState => (
    { ...state, members: action.members }
  )),
);
