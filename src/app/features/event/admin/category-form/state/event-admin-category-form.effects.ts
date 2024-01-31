import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map, switchMap, tap } from 'rxjs';
import { eventsFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { GetEventCategoryGQL } from '../../../api/generated/get-event-category.query.generated';
import { SaveEventCategoryGQL } from '../../../api/generated/save-event-category.mutation.generated';
import { EventAdminCategoryFormActions } from './event-admin-category-form.actions';

@Injectable()
export class EventAdminCategoryFormEffects {

  cancelled = createEffect(() => this.actions.pipe(
    ofType(EventAdminCategoryFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, eventsFeatureKey, 'category'])),
  ), { dispatch: false });


  save = createEffect(() => this.actions.pipe(
    ofType(EventAdminCategoryFormActions.save),
    switchMap(action => this.saveEventCategoryService.mutate({
      entity: action.category
    })),
    map(() => EventAdminCategoryFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(EventAdminCategoryFormActions.saved),
    tap(() => this.router.navigate([adminUrl, eventsFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  getCategory = createEffect(() => this.actions.pipe(
    ofType(EventAdminCategoryFormActions.getCategory),
    switchMap(action => this.getEventCategoryService.watch({
      entity: { id: action.entityId }
    }).valueChanges),
    map(response => EventAdminCategoryFormActions.categoryRetrieved(response.data.getEventCategory))
  ));

  constructor(
    private actions: Actions,
    private saveEventCategoryService: SaveEventCategoryGQL,
    private getEventCategoryService: GetEventCategoryGQL,
    private router: Router
  ) {}
}
