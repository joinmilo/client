import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { FilterSortPaginateInput, GetArticlesGQL, GetDealsGQL, GetEventsGQL, GetOrganisationsGQL, GetUserContextsGQL, PageableList_ArticleEntity, PageableList_DealEntity, PageableList_EventEntity, PageableList_OrganisationEntity, PageableList_UserContextEntity, QueryOperator } from 'src/schema/schema';
import { PortalFavoritesActions } from './portal-favorites.actions';

@Injectable()
export class PortalFavoritesEffects {

  getFavoriteArticles = createEffect(() => this.actions.pipe(
    ofType(PortalFavoritesActions.getFavoriteArticles),
    withLatestFrom(this.store.select(selectCurrentUser)),
    map(([, user])=> ({
      sort: 'modified',
      dir: 'desc',
      size: 10,

      expression: {
        entity: {
          path: 'favoritingUsers.id',
          operator: QueryOperator.Equal,
          value: user?.id
        }
      }
      } as FilterSortPaginateInput)),
    switchMap(params => this.getArticlesService.watch({params}).valueChanges),
    map(response => PortalFavoritesActions.setFavoriteArticles(response.data.getArticles as PageableList_ArticleEntity))
  ));

  getFavoriteAuthors = createEffect(() => this.actions.pipe(
    ofType(PortalFavoritesActions.getFavoriteAuthors),
    withLatestFrom(this.store.select(selectCurrentUser)),
    map(([, user])=> ({
      sort: 'modified',
      dir: 'desc',
      size: 10,

      expression: {
        entity: {
          path: 'favoritingUsers.id',
          operator: QueryOperator.Equal,
          value: user?.id
        }
      }
      } as FilterSortPaginateInput)),
    switchMap(params => this.getAuthorsService.watch({params}).valueChanges),
    map(response => PortalFavoritesActions.setFavoriteAuthors(response.data.getUserContexts as PageableList_UserContextEntity))
  ));

  getFavoriteDeals = createEffect(() => this.actions.pipe(
    ofType(PortalFavoritesActions.getFavoriteDeals),
    withLatestFrom(this.store.select(selectCurrentUser)),
    map(([, user])=> ({
      sort: 'modified',
      dir: 'desc',
      size: 10,

      expression: {
        entity: {
          path: 'favoritingUsers.id',
          operator: QueryOperator.Equal,
          value: user?.id
        }
      }
      } as FilterSortPaginateInput)),
    switchMap(params => this.getDealsService.watch({params}).valueChanges),
    map(response => PortalFavoritesActions.setFavoriteDeals(response.data.getDeals as PageableList_DealEntity))
  )); 

  getFavoriteEvents = createEffect(() => this.actions.pipe(
    ofType(PortalFavoritesActions.getFavoriteEvents),
    withLatestFrom(this.store.select(selectCurrentUser)),
    map(([, user])=> ({
      sort: 'modified',
      dir: 'desc',
      size: 10,

      expression: {
        entity: {
          path: 'favoritingUsers.id',
          operator: QueryOperator.Equal,
          value: user?.id
        }
      }
      } as FilterSortPaginateInput)),
    switchMap(params => this.getEventsService.watch({params}).valueChanges),
    map(response => PortalFavoritesActions.setFavoriteEvents(response.data.getEvents as PageableList_EventEntity))
  ));

  getFavoriteOrganisations = createEffect(() => this.actions.pipe(
    ofType(PortalFavoritesActions.getFavoriteOrganisations),
    withLatestFrom(this.store.select(selectCurrentUser)),
    map(([, user])=> ({
      sort: 'modified',
      dir: 'desc',
      size: 10,

      expression: {
        entity: {
          path: 'favoritingUsers.id',
          operator: QueryOperator.Equal,
          value: user?.id
        }
      }
      } as FilterSortPaginateInput)),
    switchMap(params => this.getOrganisationsService.watch({params}).valueChanges),
    map(response => PortalFavoritesActions.setFavoriteOrganisations(response.data.getOrganisations as PageableList_OrganisationEntity))
  ));
  
  constructor(
    private actions: Actions,
    private getArticlesService: GetArticlesGQL,
    private getAuthorsService: GetUserContextsGQL,
    private getDealsService: GetDealsGQL,
    private getEventsService: GetEventsGQL,
    private getOrganisationsService: GetOrganisationsGQL,
    private store: Store,
  ) {}
}
