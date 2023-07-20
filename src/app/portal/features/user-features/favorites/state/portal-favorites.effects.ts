import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { ArticleEntity, DealEntity, EventEntity, FilterSortPaginateInput, GetArticlesGQL, GetDealsGQL, GetEventsGQL, GetOrganisationsGQL, GetUserContextsGQL, Maybe, OrganisationEntity, QueryOperator, UserContextEntity } from 'src/schema/schema';
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
          path: 'favoriteArticlesUsers.id',
          operator: QueryOperator.Equal,
          value: user?.id
        }
      }
      } as FilterSortPaginateInput)),
    switchMap(params => this.getArticlesService.watch({params}).valueChanges),
    map(response => PortalFavoritesActions.setFavoriteArticles(response.data.getArticles?.result as Maybe<ArticleEntity[]>))
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
          path: 'favoriteAuthorsUsers.id',
          operator: QueryOperator.Equal,
          value: user?.id
        }
      }
      } as FilterSortPaginateInput)),
    switchMap(params => this.getAuthorsService.watch({params}).valueChanges),
    map(response => PortalFavoritesActions.setFavoriteAuthors(response.data.getUserContexts?.result as Maybe<UserContextEntity[]>))
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
          path: 'favoriteDealsUsers.id',
          operator: QueryOperator.Equal,
          value: user?.id
        }
      }
      } as FilterSortPaginateInput)),
    switchMap(params => this.getDealsService.watch({params}).valueChanges),
    map(response => PortalFavoritesActions.setFavoriteDeals(response.data.getDeals?.result as Maybe<DealEntity[]>))
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
          path: 'favoriteEventsUsers.id',
          operator: QueryOperator.Equal,
          value: user?.id
        }
      }
      } as FilterSortPaginateInput)),
    switchMap(params => this.getEventsService.watch({params}).valueChanges),
    map(response => PortalFavoritesActions.setFavoriteEvents(response.data.getEvents?.result as Maybe<EventEntity[]>))
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
          path: 'favoriteOrganisationsUsers.id',
          operator: QueryOperator.Equal,
          value: user?.id
        }
      }
      } as FilterSortPaginateInput)),
    switchMap(params => this.getOrganisationsService.watch({params}).valueChanges),
    map(response => PortalFavoritesActions.setFavoriteOrganisations(response.data.getOrganisations?.result as Maybe<OrganisationEntity[]>))
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
