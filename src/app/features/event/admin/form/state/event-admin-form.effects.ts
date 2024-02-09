import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { AuthService } from 'ngx-cinlib/security';
import { map, switchMap, tap, withLatestFrom } from 'rxjs';
import { EventCategoryEntity, EventEntity, EventTargetGroupEntity, FilterSortPaginateInput, OrganisationEntity, PageableList_OrganisationEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { eventsFeatureKey } from 'src/app/core/constants/feature.constants';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { Privilege } from 'src/app/core/typings/privilege';
import { GetOrganisationMembersGQL } from 'src/app/features/organisation/api/generated/get-organisation-members.generated';
import { GetEventCategoriesGQL } from 'src/app/shared/filter/event/api/generated/get-event-categories.query.generated';
import { GetEventFormGQL } from '../../../api/generated/get-event-form.query.generated';
import { GetEventTargetGroupsGQL } from '../../../api/generated/get-event-target-groups.query.generated';
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
    map(response => EventAdminFormActions.eventRetrieved(response.data.getEvent as EventEntity))
  ));

  getCategories = createEffect(() => this.actions.pipe(
    ofType(EventAdminFormActions.getCategories),
    switchMap(() => this.getCategoriesService.watch().valueChanges),
    map(response => EventAdminFormActions.setCategories(response.data.getEventCategories?.result as EventCategoryEntity[]))
  ));


  getTargetGroups = createEffect(() => this.actions.pipe(
    ofType(EventAdminFormActions.getTargetGroups),
    switchMap(() => this.getEventTargetGroupsService.watch().valueChanges),
    map(response => EventAdminFormActions.setTargetGroups(response.data.getEventTargetGroups?.result as EventTargetGroupEntity[]))
  ));

  getOrganisations = createEffect(() => this.actions.pipe(
    ofType(EventAdminFormActions.getCategories),
    withLatestFrom(this.store.select(selectCurrentUser)),
    switchMap(([, user]) => this.authService.hasAnyPrivileges<Privilege>(['organisations_admin'])
    ? this.getOrganisationsService.watch().valueChanges.pipe(map(response => response.data.getOrganisations as PageableList_OrganisationEntity))
    : this.getOrganisationMembersService.watch({
        params: {
          expression: {
            conjunction: {
              operands: [
                {
                  entity: {
                    path: 'userContext.id',
                    operator: QueryOperator.Equal,
                    value: user?.id
                  }
                },
                {
                  entity: {
                    path: 'approved',
                    operator: QueryOperator.Equal,
                    value: 'true'
                  }
                },
              ]
            }
          }
        } as FilterSortPaginateInput
      }).valueChanges.pipe(map(response => ({
        total: response.data.getOrganisationMembers?.total,
        result: response.data.getOrganisationMembers?.result?.map(member => member?.organisation)
      })))
  ),
  map(result => EventAdminFormActions.setUserOrganisations(result.result as OrganisationEntity[]))
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
    private saveEventService: SaveEventGQL,
    private getEventTargetGroupsService: GetEventTargetGroupsGQL,
    private authService: AuthService,
    private getOrganisationMembersService: GetOrganisationMembersGQL
  ) {}
}
