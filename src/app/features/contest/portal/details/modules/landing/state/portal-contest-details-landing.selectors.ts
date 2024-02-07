import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { contestPortalDetailsLandingStateKey } from '../constants/contest-details-landing.constant';
import { PortalContestDetailsLandingState } from './portal-contest-details-landing.reducer';

export const selectPortalContestDetailsLandingState =
  createFeatureSelector<PortalContestDetailsLandingState>(
    contestPortalDetailsLandingStateKey
  );

export const selectContestDetails = createSelector(
  selectPortalContestDetailsLandingState,
  (state) => state.details
);

export const selectContestMedia = createSelector(
  selectContestDetails,
  (state) => state?.uploads?.map((upload) => upload?.media ?? {})
);

export const selectMaxParticipationsReached = createSelector(
  selectCurrentUser,
  selectContestDetails,
  (user, contest) => {
    return contest?.maxParticipations
      ? contest?.maxParticipations <=
        (contest?.participations?.filter(
          (participation) => participation?.userContext?.id === user?.id
        )?.length ?? 0)
      : false;
  }
);

