import { createSelector } from '@ngrx/store';
import { selectCoreUserState } from './selector';

export const selectCurrentUser = createSelector(
  selectCoreUserState,
  state => state?.currentUser
);

export const selectIsAuthenticated = createSelector(
  selectCoreUserState,
  state => !!state?.currentUser?.id
);

export const selectFriends = createSelector(
  selectCurrentUser,
  (user) => {
    const requester = user?.friendRequester?.filter((requester) => requester?.accepted)
      .map((requester) => requester?.addressee);
    const addressee = user?.friendAddressee?.filter((addressee) => addressee?.accepted)
      .map((addressee) => addressee?.requester);

    return requester?.concat(addressee);
  }
);

export const selectUserArticleRatings = createSelector(
  selectCurrentUser,
  user => user?.articleRatings
);

export const selectUserEventRatings = createSelector(
  selectCurrentUser,
  user => user?.eventRatings
);

export const selectUserOrganisationRatings = createSelector(
  selectCurrentUser,
  user => user?.organisationRatings
);
