import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CommonActions } from 'src/app/portal/common/state/common.actions';
import { UserContextEntity } from 'src/schema/schema';
import { GetUserContextGQL } from './../../../../../../schema/schema';
import { AuthorActions } from './author.actions';

@Injectable()
export class AuthorEffects {

  getAuthorDetails = createEffect(() => this.actions.pipe(
    ofType(AuthorActions.getAuthorDetails),
    switchMap((action) => this.getUserContextService.watch({ 
      entity: {
        id: action.slug
      }
    }).valueChanges),
    map(response => response.data.getUserContext?.id
      ? AuthorActions.setAuthorDetails(response.data.getUserContext as UserContextEntity)
      : CommonActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getUserContextService: GetUserContextGQL
  ) {}
}
