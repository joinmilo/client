import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { ConjunctionOperator, FilterSortPaginateInput, GetUserContextGQL, GetUserContextsGQL, Maybe, QueryOperator, UserContextEntity } from 'src/schema/schema';
import { PortalFriendsActions } from './portal-friends.actions';


@Injectable()
export class PortalFriendsEffects {

  // getUsers = createEffect(() => this.actions.pipe(
  //     ofType(PortalFriendsActions.getUsers),
  //     withLatestFrom(this.store.select(selectCurrentUser)),
  //     map(([, user]) => ({

  //       sort: 'modified',
  //       dir: 'desc',
  //       expression: {
  //         conjunction: {
  //           operands: [
  //             {
  //               conjunction: {
  //                 operator: ConjunctionOperator.And,
  //                 operands: [
  //                   {
  //                     entity: {
  //                       path: 'user.id',
  //                       operator: QueryOperator.NotEqual,
  //                       value: user?.user?.id,
  //                     },
  //                   },
  //                   {
  //                     entity: {
  //                       path: 'user.verified',
  //                       operator: QueryOperator.Equal,
  //                       value: true,
  //                     },
  //                   },
  //                 ],
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     } as FilterSortPaginateInput)),
      
  //     concatLatestFrom(() => this.store.select(selectAllUsers)),
  //     switchMap(([ ,portalUser]) => this.getUserService.watch({
  //       params: {
  //         sort: 'modified',
  //         dir: 'desc',
  //         expression: {
  //           conjunction: {
  //             operator: ConjunctionOperator.Or,
  //             operands: [
  //               {
  //                 entity: {
  //                   path: 'user.firstName',
  //                   operator: QueryOperator.Equal,
  //                   value: portalUser,
  //                 }
  //               }
  //             ]
  //           }
  //         }
  //       }
  //     }).valueChanges),
  //     map((response) => PortalFriendsActions.setUsers(response.data.getUserContexts?.result as Maybe<UserContextEntity[]>))
  //   )
  // );

  getUsers = createEffect(() => this.actions.pipe(
      ofType(PortalFriendsActions.getUsers),
      withLatestFrom(this.store.select(selectCurrentUser)),
      map(([, user]) => ({

        sort: 'modified',
        dir: 'desc',
        expression: {
          conjunction: {
            operands: [
              {
                conjunction: {
                  operator: ConjunctionOperator.And,
                  operands: [
                    {
                      entity: {
                        path: 'user.id',
                        operator: QueryOperator.NotEqual,
                        value: user?.user?.id,
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
      } as FilterSortPaginateInput)),
      switchMap((params) => this.getUsersService.watch({params}).valueChanges),
      map((response) => PortalFriendsActions.setUsers(response.data.getUserContexts?.result as Maybe<UserContextEntity[]>))
    )
  );

  constructor(
    private actions: Actions,
    private getUsersService: GetUserContextsGQL,
    private getUSerService: GetUserContextGQL,
    private store: Store
  ) {}
}