import { createSelector } from '@ngrx/store';
import { FriendEntity, Maybe } from 'src/schema/schema';
import { selectCoreUserState } from './selector';

export const selectCurrentUser = createSelector(
  selectCoreUserState,
  state => state?.currentUser
);

export const selectIsAuthenticated = createSelector(
  selectCoreUserState,
  state => !!state?.currentUser?.id
);

export const selectAllFriends = createSelector(
  selectCurrentUser,
  user => [...(user?.receivedFriendRequests ?? []), ...(user?.sentFriendRequests ?? [])]
);

export const selectAllFriendUsers = createSelector(
  selectAllFriends,
  selectCurrentUser,
  (friends, user) => friends?.map(friend =>
    friend?.addressee?.id !== user?.id
      ? friend?.addressee
      : friend?.requester?.id !== user?.id
        ? friend?.requester
        : undefined
  )
);

export const selectAcceptedFriends = createSelector(
  selectAllFriends,
  friends => friends?.filter(friend => friend?.accepted)
);

export const selectAcceptedFriendUsers = createSelector(
  selectAcceptedFriends,
  selectCurrentUser,
  (friends, user) => friends?.map(friend =>
    friend?.addressee?.id !== user?.id
      ? friend?.addressee
      : friend?.requester?.id !== user?.id
        ? friend?.requester
        : undefined
    )
);

export const selectReceivedFriendRequest = createSelector(
  selectCurrentUser,
  user => user?.receivedFriendRequests
    ?.filter(friend => !friend?.accepted) as Maybe<FriendEntity>[]
);

export const selectSentFriendRequests = createSelector(
  selectCurrentUser,
  user => user?.sentFriendRequests
    ?.filter(friend => !friend?.accepted) as Maybe<FriendEntity>[]
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

export const selectCookieSettings = createSelector(
  selectCoreUserState,
  state => state.cookieSettings
)
