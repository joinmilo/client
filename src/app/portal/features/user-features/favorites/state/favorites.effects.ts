import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { PortalFavoritesActions } from './favorites.actions';

@Injectable()
export class PortalFavoritesEffects {

  getFavoriteEvents = createEffect(() => this.actions.pipe(
    ofType(PortalFavoritesActions.getFavoriteEvents),
    switchMap(() => this.getFavoriteEvents.watch({
      : {

      }
    }))
  ))
  
  constructor(
    private actions: Actions,
  ) {}
}
