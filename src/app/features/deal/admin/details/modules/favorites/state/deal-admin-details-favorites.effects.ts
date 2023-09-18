import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { ConjunctionOperator, PageableList_UserContextEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetFavoritingUsersGQL } from 'src/app/features/deal/api/generated/get-favoriting-users.query.generated';
import { DealAdminDetailsFavoritesActions } from './deal-admin-details-favorites.actions';
import { selectParams, selectPeriod, selectSlug } from './deal-admin-details-favorites.selectors';

@Injectable()
export class DealAdminDetailsFavoritesEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      DealAdminDetailsFavoritesActions.updateParams,
    ),
    withLatestFrom(
      this.store.select(selectPeriod),
      this.store.select(selectSlug),
      this.store.select(selectParams)),
    switchMap(([, period, slug, params]) => this.getFavoritingUsersService.watch({
      params: {
        ...params,
        expression: {
          conjunction: {
            operands: [
              {
                conjunction: {
                  operator: ConjunctionOperator.And,
                  operands: [
                    {
                      entity: {
                        path: 'favoriteDeals.slug',
                        operator: QueryOperator.Equal,
                        value: slug
                      }
                    },
                    {
                    entity: {
                      path: 'created',
                      operator: QueryOperator.GreaterOrEqual,
                      value: period?.startDate.toISOString()
                    }
                  },
                  {
                    entity: {
                      path: 'created',
                      operator: QueryOperator.LessOrEqual,
                      value: period?.endDate.toISOString()
                    }
                  }]
                }
              }
            ]
          }
        }
      }
    }).valueChanges),
    map(response => DealAdminDetailsFavoritesActions.setFavorites(response.data.getUserContexts as PageableList_UserContextEntity))
  ));

  constructor(
    private actions: Actions,
    private getFavoritingUsersService: GetFavoritingUsersGQL,
    private store: Store,
  ) { }
}
