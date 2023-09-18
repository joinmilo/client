import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_UserContextEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetFavoritingUsersGQL } from 'src/app/features/article/api/generated/get-favoriting-users.query.generated';
import { ArticleAdminDetailsFavoritesActions } from './article-admin-details-favorites.actions';
import { selectParams, selectSlug } from './article-admin-details-favorites.selectors';

@Injectable()
export class ArticleAdminDetailsFavoritesEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      ArticleAdminDetailsFavoritesActions.updateParams,
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
    map(response => ArticleAdminDetailsFavoritesActions.setFavorites(response.data.getUserContexts as PageableList_UserContextEntity))
  ));

  constructor(
    private actions: Actions,
    private getFavoritingUsersService: GetFavoritingUsersGQL,
    private store: Store,
  ) { }
}
