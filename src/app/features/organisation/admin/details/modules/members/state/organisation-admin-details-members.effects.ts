import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { ConjunctionOperator, PageableList_OrganisationMemberEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';

import { DeleteOrganisationMemberGQL } from 'src/app/features/organisation/api/generated/delete-organisation-member.mutation.generated';
import { GetOrganisationMembersGQL } from 'src/app/features/organisation/api/generated/get-organisation-members.generated';
import { SaveOrganisationMemberGQL } from 'src/app/features/organisation/api/generated/save-organisation-member.mutation.generated';
import { ConfirmDialogService } from 'src/app/shared/confirmDialog/dialog-confirm.service';
import { ConfirmDialogType } from 'src/app/shared/confirmDialog/typings/confirm-dialog';
import { OrganisationAdminDetailsMembersActions } from './organisation-admin-details-members.actions';
import { selectParams, selectSlug } from './organisation-admin-details-members.selectors';

@Injectable()
export class OrganisationAdminDetailsMembersEffects {

  updateMembers = createEffect(() => this.actions.pipe(
    ofType(
      OrganisationAdminDetailsMembersActions.updateParams,
      OrganisationAdminDetailsMembersActions.memberDeleted,
      OrganisationAdminDetailsMembersActions.publicToggled,
    ),
    withLatestFrom(
      this.store.select(selectSlug),
      this.store.select(selectParams)),
    switchMap(([, slug, params]) => this.getOrganisationMembersService.watch({
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
                      value: 'true'
                    }
                  }]
                }
              }
            ]
          }
        }
      }
    }).valueChanges),
    map(response => OrganisationAdminDetailsMembersActions.setMembers(response.data.getOrganisationMembers as PageableList_OrganisationMemberEntity))
  ));

  deleteMember = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminDetailsMembersActions.deleteMember),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmDialogType.Delete, context: action.member?.userContext?.user?.email }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.member)
          : EMPTY
        )
      )
    ),
    switchMap(organisation => this.deleteOrganisationMemberService.mutate({
      id: organisation?.id
    })),
    map(() => OrganisationAdminDetailsMembersActions.memberDeleted())
  ));

  organisationDeleted = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminDetailsMembersActions.memberDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  togglePublic = createEffect(() =>
    this.actions.pipe(
      ofType(OrganisationAdminDetailsMembersActions.togglePublic),
      switchMap((action) => {
        const entityInput = {
          id: action.member?.id,
          isPublic: !action.member?.isPublic
        };
        return this.saveOrganisationMemberService.mutate(
          {
            entity: entityInput
          })
      }
      ),
      map(() => OrganisationAdminDetailsMembersActions.publicToggled())
    )
  );

  constructor(
    private actions: Actions,
    private getOrganisationMembersService: GetOrganisationMembersGQL,
    private store: Store,
    private dialog: MatDialog,
    private deleteOrganisationMemberService: DeleteOrganisationMemberGQL,
    private saveOrganisationMemberService: SaveOrganisationMemberGQL,
    private confirmDialogService: ConfirmDialogService
  ) { }
}
