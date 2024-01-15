import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { ConjunctionOperator, PageableList_OrganisationMemberEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';

import { DeleteOrganisationMemberGQL } from 'src/app/features/organisation/api/generated/delete-organisation-member.mutation.generated';
import { GetOrganisationMembersGQL } from 'src/app/features/organisation/api/generated/get-organisation-members.generated';
import { SaveOrganisationMemberGQL } from 'src/app/features/organisation/api/generated/save-organisation-member.mutation.generated';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
import { OrganisationAdminDetailsApplicationsActions } from './organisation-admin-details-applications.actions';
import { selectParams, selectSlug } from './organisation-admin-details-applications.selectors';

@Injectable()
export class OrganisationAdminDetailsApplicationsEffects {

  updateApprovedApplications = createEffect(() => this.actions.pipe(
    ofType(
      OrganisationAdminDetailsApplicationsActions.updateParams,
      OrganisationAdminDetailsApplicationsActions.memberDeleted,
      OrganisationAdminDetailsApplicationsActions.memberAdded,
    ),
    withLatestFrom(
      this.store.select(selectSlug),
      this.store.select(selectParams)),
    switchMap(([, slug, params]) => this.getOrganisationApplicationsService.watch({
      params: {
        ...params,
        expression: {
          conjunction: {
            operands: [
              {
                conjunction: {
                  operator: ConjunctionOperator.And,
                  operands: [
                    {
                      entity: {
                        path: 'organisation.slug',
                        operator: QueryOperator.Equal,
                        value: slug
                      }
                    },
                  {
                    entity: {
                      path: 'approved',
                      operator: QueryOperator.Equal,
                      value: 'false'
                    }
                  }]
                }
              }
            ]
          }
        }
      }
    }).valueChanges),
    map(response => OrganisationAdminDetailsApplicationsActions.setMembers(response.data.getOrganisationMembers as PageableList_OrganisationMemberEntity))
  ));

  deleteApplication = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminDetailsApplicationsActions.deleteMember),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmType.Delete, context: action.member?.userContext?.user?.email }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.member)
          : EMPTY
        )
      )
    ),
    switchMap(member => this.deleteOrganisationApplicationService.mutate({
      id: member?.id
    })),
    map(() => OrganisationAdminDetailsApplicationsActions.memberDeleted())
  ));

  applicationDeleted = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminDetailsApplicationsActions.memberDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  addMember = createEffect(() =>
    this.actions.pipe(
      ofType(OrganisationAdminDetailsApplicationsActions.addMember),
      switchMap((action) => {
        const entityInput = {
          id: action.member?.id,
          approved: !action.member?.approved
        };
        return this.saveOrganisationMemberService.mutate(
          {
            entity: entityInput
          })
      }
      ),
      map(() => OrganisationAdminDetailsApplicationsActions.memberAdded())
    )
  );

  constructor(
    private actions: Actions,
    private confirmDialogService: ConfirmService,
    private deleteOrganisationApplicationService: DeleteOrganisationMemberGQL,
    private getOrganisationApplicationsService: GetOrganisationMembersGQL,
    private saveOrganisationMemberService: SaveOrganisationMemberGQL,
    private store: Store,
  ) { }
}
