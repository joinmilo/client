import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { EventTargetGroupEntity, GetEventTargetGroupsGQL } from 'src/schema/schema';
import { EventFilterActions } from './event-filter.actions';

@Injectable()
export class EventFilterEffects {

  getEventTargetGroups = createEffect(() => this.actions.pipe(
    ofType(EventFilterActions.getTargetGroups),
    switchMap(() => this.getTargetGroupsService.watch().valueChanges),
    map(response => EventFilterActions.setTargetGroups(response.data.getEventTargetGroups?.result as EventTargetGroupEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getTargetGroupsService: GetEventTargetGroupsGQL,
  ) {}
}
