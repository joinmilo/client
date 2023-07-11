import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { GetUserContextAuthorGQL, UserContextEntity } from 'src/schema/schema';
import { PortalAuthorDetailsActions } from './portal-author-details.actions';
@Injectable()
export class AuthorDetailsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(PortalAuthorDetailsActions.getDetails),
    switchMap((action) => this.getUserContextService.watch({ 
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getUserContext?.id
      ? PortalAuthorDetailsActions.setDetails(response.data.getUserContext as UserContextEntity)
      : PortalMenuActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getUserContextService: GetUserContextAuthorGQL, 
  ) {}
}
