import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map } from 'rxjs';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { SchedulerActions } from './scheduler.actions';


@Injectable()
export class SchedulerEffects {

  createdSuccessfully = createEffect(() => this.actions.pipe(
    ofType(SchedulerActions.generateResult),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'successfullyGeneratedSchedules',
      labelAction: 'createNewSchedules'
    })),
  ));

  constructor(
    private actions: Actions,
  ) {}
}
