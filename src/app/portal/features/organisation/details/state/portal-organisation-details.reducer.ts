import { createReducer, on } from '@ngrx/store';
import { Maybe, OrganisationCommentEntity, OrganisationEntity } from 'src/schema/schema';
import { PortalOrganisationDetailsActions } from './portal-organisation-details.actions';

export interface PortalOrganisationDetailsState {
  comments?: Maybe<OrganisationCommentEntity[]>,
  details?: Maybe<OrganisationEntity>,
  savedOrganisationComment?: Maybe<OrganisationCommentEntity>
}

export const initialState: PortalOrganisationDetailsState = {
};

export const portalOrganisationDetailsReducer = createReducer(
  initialState,

  on(
    PortalOrganisationDetailsActions.setDetails,
    PortalOrganisationDetailsActions.detailsUpdated,
    (state, action): PortalOrganisationDetailsState => 
      ({ ...state, details: action.organisation })
  ),

  on(PortalOrganisationDetailsActions.setComments, (state, action): PortalOrganisationDetailsState => (
    { ...state, comments: action.comments}
  )),

  on(PortalOrganisationDetailsActions.organisationCommentSaved, (state, action): PortalOrganisationDetailsState => (
    { ...state, savedOrganisationComment: action.entity }
  )),
);
