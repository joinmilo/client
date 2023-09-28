import { createReducer, on } from '@ngrx/store';
import { ContactEntity, Maybe, MilestoneEntity } from 'src/app/core/api/generated/schema';
import { AdminLandingActions } from './admin-landing.actions';

export interface AdminLandingState {
  contact?: Maybe<ContactEntity>,
  milestones?: Maybe<MilestoneEntity[]>
}

export const initialState: AdminLandingState = {
};

export const adminLandingReducer = createReducer(
  initialState,

  on(AdminLandingActions.setDeveloperContact, (state, action): AdminLandingState => (
    { ...state, contact: action.contact }
  )),

  on(AdminLandingActions.setMilestones, (state, action): AdminLandingState => (
    { ...state, milestones: action.milestones }
  )),
);
