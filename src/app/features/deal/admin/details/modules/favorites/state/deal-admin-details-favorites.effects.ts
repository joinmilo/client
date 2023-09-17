import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_UserContextEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetFavoritingUsersGQL } from 'src/app/features/deal/api/generated/get-favoriting-users.query.generated';
import { DealAdminDetailsFavoritesActions } from './deal-admin-details-favorites.actions';
import { selectParams, selectSlug } from './deal-admin-details-favorites.selectors';

@Injectable()
export class DealAdminDetailsFavoritesEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      DealAdminDetailsFavoritesActions.updateParams,
    ),
    withLatestFrom(
      this.store.select(selectSlug),
      this.store.select(selectParams)),
    switchMap(([, slug, params]) => this.getFavoritingUsersService.watch({
      params: {
        ...params,
        expression: {
          entity: {
            path: 'favoriteOrganisations.slug',
            operator: QueryOperator.Equal,
            value: slug
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
