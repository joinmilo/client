import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { contestPortalDetailsParticipationFormStateKey } from '../constants/contest-portal-details-participation-form.constants';
import { ContestPortalDetailsParticipationFormState } from './contest-portal-details-participation-form.reducer';

export const selectContestDetailsParticipationFormState = createFeatureSelector<ContestPortalDetailsParticipationFormState>(contestPortalDetailsParticipationFormStateKey);

export const selectContestDetails = createSelector(
  selectContestDetailsParticipationFormState,
  (state) => state.details
);

export const selectSlug = createSelector(
  selectContestDetailsParticipationFormState,
  (state) => state.slug
);

export const selectUserPartipations = createSelector(
  selectCurrentUser,
  selectContestDetails,
  (user, contest) =>
    user?.contestPariticpations?.filter((participation) =>
      participation?.contest?.id == contest?.id).length
    ?? 0
);
