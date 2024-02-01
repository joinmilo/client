import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ConfirmService, ConfirmType } from 'ngx-cinlib/modals/confirm';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_OrganisationEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { DeleteOrganisationGQL } from 'src/app/features/organisation/api/generated/delete-organisation.mutation.generated';
import { ChangeOrganisationApprovalGQL } from '../../../api/generated/change-organisation-approval.mutation.generated';
import { GetOrganisationsGQL } from '../../../api/generated/get-organisations.query.generated';
import { OrganisationAdminApprovalOverviewActions } from './organisation-admin-approval-overview.actions';
import { selectParams } from './organisation-admin-approval-overview.selectors';

@Injectable()
export class OrganisationAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      OrganisationAdminApprovalOverviewActions.updateParams,
      OrganisationAdminApprovalOverviewActions.organisationDeleted,
      OrganisationAdminApprovalOverviewActions.approvalChanged,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getOrganisationsService.watch({ 
      params:{
        ...params,
        expression:{
          entity:{
            path: 'approved',
            operator: QueryOperator.Equal,
            value: 'false'
          }
        }
      }
    }).valueChanges),
    map(response => OrganisationAdminApprovalOverviewActions.setOverviewData(response.data.getOrganisations as PageableList_OrganisationEntity))
  ));

  changeApproval = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminApprovalOverviewActions.toggleOrganisationApproval),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Change, 
        context: action.organisation?.approved
        ? 'thisWillUnpublishOrganisation'
        : 'thisWillApproveOrganisation'}).pipe(
        switchMap(confirmed => confirmed
          ? of(action.organisation)
          : EMPTY
        )
      )
    ),
    switchMap(organisation => this.changeOrganisationApprovalService.mutate({
      organisationId: organisation?.id
    })),
    map(() => OrganisationAdminApprovalOverviewActions.approvalChanged())
  ));

  approvalChanged = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminApprovalOverviewActions.approvalChanged),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'changedSuccessfully'
    }))
  ));

  deleteOrganisation = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminApprovalOverviewActions.deleteOrganisation),
    switchMap(action => this.confirmService
      .confirm({ type: ConfirmType.Delete, context: action.organisation?.name }).pipe(
        switchMap(confirmed => confirmed
          ? of(action.organisation)
          : EMPTY
        )
      )
    ),
    switchMap(organisation => this.deleteOrganisationService.mutate({
      id: organisation?.id
    })),
    map(() => OrganisationAdminApprovalOverviewActions.organisationDeleted())
  ));

  organisationDeleted = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminApprovalOverviewActions.organisationDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private confirmService: ConfirmService,
    private changeOrganisationApprovalService: ChangeOrganisationApprovalGQL,
    private deleteOrganisationService: DeleteOrganisationGQL,
    private getOrganisationsService: GetOrganisationsGQL,
    private store: Store,
  ) {}
}
