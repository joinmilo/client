import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap, withLatestFrom } from 'rxjs';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser, selectFriends, selectReceivedRequest, selectSentRequests } from 'src/app/core/state/selectors/user.selectors';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConjunctionOperator, FilterSortPaginateInput, FriendEntity, GetUserContextsGQL, Maybe, QueryOperator, SaveFriendsGQL, UserContextEntity } from 'src/schema/schema';
import { PortalFriendsActions } from './portal-friends.actions';


@Injectable()
export class PortalFriendsEffects {

  getUsers = createEffect(() => this.actions.pipe(
      ofType(PortalFriendsActions.getUsers),
      withLatestFrom(
          this.store.select(selectCurrentUser),
          this.store.select(selectFriends),
          this.store.select(selectSentRequests),
          this.store.select(selectReceivedRequest),

          ),
      map(([ action, user, friends, sentRequests, receivedRequests]) => {
       
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
      ))
      
      sentRequests?.forEach(sentRequests => addFriends.expression?.conjunction?.operands?.push(
        {
          entity: {
            path: 'id',
            operator: QueryOperator.NotEqual,
            value: sentRequests?.id 
          }
        }
      ))

      receivedRequests?.forEach(receivedRequests => addFriends.expression?.conjunction?.operands?.push(
        {
          entity: {
            path: 'id',
            operator: QueryOperator.NotEqual,
            value: receivedRequests?.id 
          }
        }
      ))

      return addFriends

      }),
      switchMap((params) => this.getUsersService.watch({params}).valueChanges),
      map((response) => PortalFriendsActions.setUsers(response.data.getUserContexts?.result as Maybe<UserContextEntity[]>))
    )
  );

  saveFriendRequests = createEffect(() =>
    this.actions.pipe(
      ofType(PortalFriendsActions.sendFriendRequests),
      tap((action) => {
        console.log('friendRequests:', action.friendRequests);
      }),
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


  constructor(
    private actions: Actions,
    private getUsersService: GetUserContextsGQL,
    private saveFriendsService: SaveFriendsGQL,
    private store: Store
  ) {}
}