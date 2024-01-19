import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap, withLatestFrom } from 'rxjs';
import { ConjunctionOperator, FilterSortPaginateInput, Maybe, OrganisationEntity, OrganisationMemberEntity, PrivilegeApplicationEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { userUrl } from 'src/app/core/constants/module.constants';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { GetOrganisationsGQL } from 'src/app/user/api/generated/get-organisations.query.generated';
import { SaveOrganisationApplicationGQL } from 'src/app/user/api/generated/save-organisation-application.mutation.generated';
import { SaveOrganisationMembersGQL } from 'src/app/user/api/generated/save-organisation-members.mutation.generated';
import { SavePrivilegeApplicationGQL } from 'src/app/user/api/generated/save-privilege-application.mutation.generated';
import { PortalParticipateActions } from './portal-participate.actions';

@Injectable()
export class PortalParticipateEffects {

  getOrganisations = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.getOrganisations),
    withLatestFrom(this.store.select(selectCurrentUser)),

    map(([action, user]) => ({
      sort: 'modified',
      dir: 'desc',
      search: action.query,

      expression: {
        conjunction: {
          operands: [
            {
              conjunction: {
                operator: ConjunctionOperator.And,
                operands: [
                  {
                    entity: {
                      path: 'members.userContext.id',
                      operator: QueryOperator.NotEqual,
                      value: user?.id,
                    },
                  },
                  {
                    entity: {
                      path: 'approved',
                      operator: QueryOperator.Equal,
                      value: true,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    } as FilterSortPaginateInput)),
    switchMap((params) => this.getOrganisationsService.watch({ params }).valueChanges),
    map(response => PortalParticipateActions.setOrganisations(response.data.getOrganisations?.result as Maybe<OrganisationEntity[]>))
  ));

  saveOrganisationRequests = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.sendOrganisationRequests),
    switchMap((action) => this.saveOrganisationMembersService.mutate({
      entities: action.organisationRequests
    })),
    map((response) => PortalParticipateActions.organisationRequestsSent(response.data?.saveOrganisationMembers as Maybe<OrganisationMemberEntity[]>))
  ));

  OrganisationRequestsSent = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.organisationRequestsSent),
    tap(() => this.router.navigate(['/', userUrl, 'participate', 'success-join-organisation'])),
  ), {dispatch: false});



  saveAuthorApplication = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.saveAuthorApplication),
    switchMap((action) => this.savePrivilegeApplicationService.mutate({
      entity: action.entity
    })),
    map(response => PortalParticipateActions.authorApplicationSaved(response.data?.savePrivilegeApplication as PrivilegeApplicationEntity))
  ));

  authorApplicationSaved = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.authorApplicationSaved),
    tap(() => this.router.navigate(['/', userUrl, 'participate', 'success-become-author'])),
  ), {dispatch: false});

  cancelled = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.cancelled),
    tap(() => this.router.navigate([userUrl, 'participate'])),
  ), { dispatch: false });


  save = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.save),
    switchMap(action => this.saveOrganisationApplicationService.mutate({
      entity: action.organisation
    })),
    map(() => PortalParticipateActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(PortalParticipateActions.saved),
    tap(() => this.router.navigate(['/', userUrl, 'participate', 'success-create-organisation'])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private getOrganisationsService: GetOrganisationsGQL,
    private router: Router,
    private saveOrganisationApplicationService: SaveOrganisationApplicationGQL,
    private saveOrganisationMembersService: SaveOrganisationMembersGQL,
    private savePrivilegeApplicationService: SavePrivilegeApplicationGQL,
    private store: Store,
  ) {}

}
