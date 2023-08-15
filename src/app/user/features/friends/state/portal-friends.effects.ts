import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { CoreUserActions } from 'src/app/core/state/actions/core-user.actions';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectAllFriendUsers, selectAllFriends, selectCurrentUser, selectReceivedFriendRequest } from 'src/app/core/state/selectors/user.selectors';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConjunctionOperator, DeleteFriendGQL, FilterSortPaginateInput, FriendEntity, GetUserContextsGQL, Maybe, QueryOperator, SaveFriendGQL, SaveFriendsGQL, UserContextEntity } from 'src/schema/schema';
import { PortalFriendsActions } from './portal-friends.actions';

@Injectable()
export class PortalFriendsEffects {

  getUsers = createEffect(() => this.actions.pipe(
    ofType(PortalFriendsActions.getUsers),
    withLatestFrom(
      this.store.select(selectCurrentUser),
      this.store.select(selectAllFriendUsers)),
    map(([action, user, friends]) => {

      const addFriends = ({
        sort: 'modified',
        dir: 'desc',
        search: action.query,

        expression: {
          conjunction: {
            operands: [
              {
                conjunction: {
                  operator: ConjunctionOperator.And,
                  operands: [
                    {
                      entity: {
                        path: 'id',
                        operator: QueryOperator.NotEqual,
                        value: user?.id,
                      },
                    },
                    {
                      entity: {
                        path: 'user.verified',
                        operator: QueryOperator.Equal,
                        value: true,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      } as FilterSortPaginateInput)

      friends?.forEach(friend => addFriends.expression?.conjunction?.operands?.push(
        {
          entity: {
            path: 'id',
            operator: QueryOperator.NotEqual,
            value: friend?.id
          }
        }
      ));

      return addFriends;
    }),
    switchMap((params) => this.getUsersService.watch({ params }).valueChanges),
    map((response) => PortalFriendsActions.setUsers(response.data.getUserContexts?.result as Maybe<UserContextEntity[]>))
  ));

  saveFriendRequests = createEffect(() =>
    this.actions.pipe(
      ofType(PortalFriendsActions.sendFriendRequests),
      switchMap((action) => this.saveFriendsService.mutate({
        entities: action.friendRequests,
      })),
      map((response) => PortalFriendsActions.friendRequestsSent(response.data?.saveFriends as Maybe<FriendEntity[]>))
    )
  );

  friendRequestSend = createEffect(() => this.actions.pipe(
    ofType(PortalFriendsActions.friendRequestsSent),
    map((friends) => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage:
        friends.friendRequests?.length && friends.friendRequests.length > 1
          ? 'friendRequestsSent'
          : 'friendRequestSent'
    }))
  ));

  acceptFriendRequest = createEffect(() => this.actions.pipe(
    ofType(PortalFriendsActions.acceptFriendRequest),
    withLatestFrom(this.store.select(selectReceivedFriendRequest)),
    map(([action, friends]) => friends?.find(friend => friend?.requester?.id === action.userId)),
    switchMap((action) => this.saveFriendService.mutate({
      entity: {
        id: action?.id,
        accepted: true,
      }
    })),
    map((response) => PortalFriendsActions.friendRequestAccepted(response.data?.saveFriend as Maybe<FriendEntity>))
  ));

  deleteFriend = createEffect(() => this.actions.pipe(
    ofType(PortalFriendsActions.deleteFriend),
    withLatestFrom(this.store.select(selectAllFriends)),
    map(([action, friends]) => friends?.find(friend => friend?.requester?.id === action.userId) ||
      friends?.find(friend => friend?.addressee?.id === action.userId)
    ),
    switchMap(friend => this.deleteFriendService.mutate({
      id: friend?.id
    })),
    map(response => PortalFriendsActions.friendDeleted(response.data?.deleteFriend))
  ));

  updateUser = createEffect(() => this.actions.pipe(
    ofType(PortalFriendsActions.friendDeleted,
      PortalFriendsActions.friendRequestAccepted),
    map(() => CoreUserActions.updateUser())
  ));

  constructor(
    private actions: Actions,
    private getUsersService: GetUserContextsGQL,
    private saveFriendsService: SaveFriendsGQL,
    private saveFriendService: SaveFriendGQL,
    private deleteFriendService: DeleteFriendGQL,
    private store: Store
  ) { }
}