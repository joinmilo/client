import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_UserContextEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { GetFavoritingUsersGQL } from 'src/app/features/organisation/api/generated/get-favoriting-users.query.generated';
import { OrganisationAdminDetailsEventsActions } from './organisation-admin-details-events.actions';
import { selectParams, selectSlug } from './organisation-admin-details-events.selectors';

@Injectable()
export class OrganisationAdminDetailsEventsEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      OrganisationAdminDetailsEventsActions.updateParams,
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
    map(response => OrganisationAdminDetailsEventsActions.setEvents(response.data.getUserContexts as PageableList_UserContextEntity))
  ));

  constructor(
    private actions: Actions,
    private getFavoritingUsersService: GetFavoritingUsersGQL,
    private store: Store,
  ) { }
}
