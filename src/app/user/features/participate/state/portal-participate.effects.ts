import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { SaveUserGQL, UserContextEntity } from 'src/schema/schema';
import { PortalParticipateActions } from './portal-participate.actions';

@Injectable()
export class PortalParticipateEffects {

  save = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.save),
    switchMap((action) => this.saveUserService.mutate({
      entity: action.entity
    })),
    map(response => PortalParticipateActions.saved(response.data?.saveUserContext as UserContextEntity))
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.saved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'dataSaved'
    }))
  ));

  constructor(
    private actions: Actions,
    private saveUserService: SaveUserGQL,
  ) {}

}
