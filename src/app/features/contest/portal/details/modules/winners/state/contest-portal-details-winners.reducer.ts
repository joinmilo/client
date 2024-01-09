import { createReducer, on } from '@ngrx/store';

import { ContestParticipationEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ContestPortalDetailsWinnersActions } from './contest-portal-details-winners.actions';

export interface ContestPortalDetailsWinnersState {
  winners?: Maybe<ContestParticipationEntity[]>,
}

export const initialState: ContestPortalDetailsWinnersState = {
};

export const contestPortalDetailsWinnersReducer = createReducer(
  initialState,

  on(
    ContestPortalDetailsWinnersActions.setWinners,
    (state, action): ContestPortalDetailsWinnersState =>
      ({ ...state, winners: action.winners })
  ),
);
