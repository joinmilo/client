import { createSelector } from '@ngrx/store';
import { UserContextEntity } from 'src/schema/schema';
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
  user => {
    const requester = user?.friendRequester
      ?.filter((requester) => requester?.accepted)
      ?.map((requester) => requester?.addressee);
    const addressee = user?.friendAddressee
      ?.filter((addressee) => addressee?.accepted)
      ?.map((addressee) => addressee?.requester);

    return requester?.concat(addressee);
  }
);

export const selectFriendRequests = createSelector(
  selectCurrentUser,
  user => {
    const friendRequester = user?.friendAddressee
  ?.filter((requester) => !requester?.accepted)
  ?.map((requester) => requester?.requester);
  
  return friendRequester as UserContextEntity[]
});

export const selectSentRequests = createSelector(
  selectCurrentUser,
  user => {
    const sentRequests = user?.friendRequester
  ?.filter((addressee) => !addressee?.accepted)
  ?.map((addressee) => addressee?.addressee)

  return sentRequests as UserContextEntity[]
});

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

export const selectAllowExternalContent = createSelector(
  selectCoreUserState,
  state => state.allowExternalContent
)
