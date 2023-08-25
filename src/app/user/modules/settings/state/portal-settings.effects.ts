import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { SaveUserGQL, UserContextEntity } from 'src/schema/schema';
import { PortalSettingsActions } from './portal-settings.actions';

@Injectable()
export class PortalSettingsEffects {

  savePersonalData = createEffect(() => this.actions.pipe(
    ofType(PortalSettingsActions.savePersonalData),
    switchMap((action) => this.saveUserService.mutate({
      entity: action.entity
    })),
    map(response => PortalSettingsActions.personalDataSaved(response.data?.saveUser as UserContextEntity))
  ))

  constructor(
    private actions: Actions,
    private saveUserService: SaveUserGQL,
  ) { }
}