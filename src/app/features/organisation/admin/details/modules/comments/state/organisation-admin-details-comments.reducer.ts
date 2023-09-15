import { createReducer, on } from '@ngrx/store';

import { FilterSortPaginateInput, Maybe, PageableList_OrganisationCommentEntity } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';
import { OrganisationAdminDetailsCommentsActions } from './organisation-admin-details-comments.actions';

export interface OrganisationAdminDetailsCommentsState {
  comments?: PageableList_OrganisationCommentEntity,
  period?: Period,
  slug?: Maybe<string>,
  params : FilterSortPaginateInput
}

export const initialState: OrganisationAdminDetailsCommentsState = {
  params:{}
};

export const organisationAdminDetailsCommentsReducer = createReducer(
  initialState,

  on(OrganisationAdminDetailsCommentsActions.updateParams, (state, action): OrganisationAdminDetailsCommentsState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(OrganisationAdminDetailsCommentsActions.updateParams, (state, action): OrganisationAdminDetailsCommentsState => (
    { ...state, period: Object.assign({ ...state.period } || {}, action.period) }
  )),

  on(OrganisationAdminDetailsCommentsActions.updateParams, (state, action): OrganisationAdminDetailsCommentsState => (
    { ...state, slug: action.slug }
  )),

  on(OrganisationAdminDetailsCommentsActions.setComments, (state, action): OrganisationAdminDetailsCommentsState => (
    { ...state, comments: action.comments }
  )),
);
