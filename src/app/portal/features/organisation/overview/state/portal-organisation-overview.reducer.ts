import { createReducer, on } from '@ngrx/store';
import { EventScheduleEntity, FilterSortPaginateInput, Maybe, OrganisationEntity, PageableList_OrganisationEntity } from 'src/schema/schema';
import { PortalOrganisationOverviewActions } from './portal-organisation-overview.actions';

export interface PortalOrganisationOverviewState {
  overviewData?: PageableList_OrganisationEntity,
  params: FilterSortPaginateInput,
  schedules?: Maybe<EventScheduleEntity>[],
  sponsoredOrganisation?: Maybe<OrganisationEntity>,
}

export const initialState: PortalOrganisationOverviewState = {
  params: {}
};

export const portalOrganisationOverviewReducer = createReducer(
  initialState,

  on(PortalOrganisationOverviewActions.setSponsoredOrganisation, (state, action): PortalOrganisationOverviewState => (
    { ...state, sponsoredOrganisation: action.organisation }
  )),
  
  on(PortalOrganisationOverviewActions.updateParams, (state, action): PortalOrganisationOverviewState => (
    { ...state, params: Object.assign({ ...state.params } || {}, action.params) }
  )),

  on(PortalOrganisationOverviewActions.setOverviewData, (state, action): PortalOrganisationOverviewState => (
    { ...state, overviewData: action.organisations }
  )),
);
