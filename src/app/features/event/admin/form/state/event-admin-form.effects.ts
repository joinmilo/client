import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap, withLatestFrom } from 'rxjs';
import { EventCategoryEntity, OrganisationEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { eventsFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { GetEventCategoriesGQL } from 'src/app/shared/filter/event/api/generated/get-event-categories.query.generated';
import { GetEventFormGQL } from '../../../api/generated/get-event-form.query.generated';
import { GetUserOrganisationsGQL } from '../../../api/generated/get-organisations.query.generated';
import { SaveEventGQL } from '../../../api/generated/save-event.mutation.generated';
import { EventAdminFormActions } from './event-admin-form.actions';

@Injectable()
export class EventAdminFormEffects {

  getEvent = createEffect(() => this.actions.pipe(
    ofType(EventAdminFormActions.getEvent),
    switchMap(action => this.getEventService.watch({
      entity: { slug: action.slug }
    }).valueChanges),
    map(response => EventAdminFormActions.eventRetrieved(response.data.getEvent))
  ));

  getCategories = createEffect(() => this.actions.pipe(
    ofType(EventAdminFormActions.getCategories),
    switchMap(() => this.getCategoriesService.watch().valueChanges),
    map(response => EventAdminFormActions.setCategories(response.data.getEventCategories?.result as EventCategoryEntity[]))
  ));

  getOrganisations = createEffect(() => this.actions.pipe(
    ofType(EventAdminFormActions.getCategories),
    withLatestFrom(this.store.select(selectCurrentUser)),
    switchMap(([, user]) => this.getOrganisationsService.watch(
      {
        params: {
          expression:{
            entity:{
              path: "members.userContext.id",
              operator: QueryOperator.Equal,
              value: user?.id
            }
          }
        }
      }
    ).valueChanges),
    map(response => EventAdminFormActions.setUserOrganisations(response.data.getOrganisations?.result as OrganisationEntity[]))
  ));

  cancelled = createEffect(() => this.actions.pipe(
    ofType(EventAdminFormActions.cancelled),
    tap(() => this.router.navigate([adminUrl, eventsFeatureKey])),
  ), { dispatch: false });

  save = createEffect(() => this.actions.pipe(
    ofType(EventAdminFormActions.save),
    switchMap(action => this.saveEventService.mutate({
      entity: action.event
    })),
    map(() => EventAdminFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(EventAdminFormActions.saved),
    tap(() => this.router.navigate([adminUrl, eventsFeatureKey])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private getEventService: GetEventFormGQL,
    private getCategoriesService: GetEventCategoriesGQL,
    private getOrganisationsService: GetUserOrganisationsGQL,
    private store: Store,
    private router: Router,
    private saveEventService: SaveEventGQL
  ) {}
}
