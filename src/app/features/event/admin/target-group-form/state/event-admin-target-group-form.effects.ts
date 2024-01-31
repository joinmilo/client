import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map, switchMap, tap } from 'rxjs';
import { eventsFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { GetEventTargetGroupGQL } from '../../../api/generated/get-event-target-group.query.generated';

import { SaveEventTargetGroupGQL } from '../../../api/generated/save-event-target-group.mutation.generated';
import { EventAdminTargetGroupFormActions } from './event-admin-target-group-form.actions';


@Injectable()
export class EventAdminTargetGroupFormEffects {

  cancelled = createEffect(() => this.actions.pipe(
    ofType(EventAdminTargetGroupFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, eventsFeatureKey, 'target-group'])),
  ), { dispatch: false });


  save = createEffect(() => this.actions.pipe(
    ofType(EventAdminTargetGroupFormActions.save),
    switchMap(action => this.saveEventTargetGroupService.mutate({
      entity: action.targetGroup
    })),
    map(() => EventAdminTargetGroupFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(EventAdminTargetGroupFormActions.saved),
    tap(() => this.router.navigate([adminUrl, eventsFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  getTargetGroup = createEffect(() => this.actions.pipe(
    ofType(EventAdminTargetGroupFormActions.getTargetGroup),
    switchMap(action => this.getEventTargetGroupService.watch({
      entity: { id: action.entityId }
    }).valueChanges),
    map(response => EventAdminTargetGroupFormActions.targetGroupRetrieved(response.data.getEventTargetGroup))
  ));

  constructor(
    private actions: Actions,
    private saveEventTargetGroupService: SaveEventTargetGroupGQL,
    private getEventTargetGroupService: GetEventTargetGroupGQL,
    private router: Router
  ) {}
}
