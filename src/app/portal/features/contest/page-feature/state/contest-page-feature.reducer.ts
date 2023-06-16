import { createReducer, on } from '@ngrx/store';
import { ContestEntity, Maybe } from 'src/schema/schema';
import { ContestPageFeatureActions } from './contest-page-feature.actions';

export interface ContestPageFeatureState {
  recentContests?: Maybe<ContestEntity[]>,
}

export const initialState: ContestPageFeatureState = { };

export const contestPageFeatureReducer = createReducer(
  initialState,

  on(ContestPageFeatureActions.setRecentContests, (state, action): ContestPageFeatureState => (
    { ...state, recentContests: action.contests }
  )),
);
