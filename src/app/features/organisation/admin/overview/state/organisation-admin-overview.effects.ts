import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { FilterSortPaginateInput, PageableList_OrganisationEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmChangeComponent } from 'src/app/shared/dialogs/confirm-change/confirm-change.component';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { DeleteOrganisationGQL } from '../../../api/generated/delete-organisation.mutation.generated';
import { GetOrganisationMembersGQL } from '../../../api/generated/get-organisation-members.generated';
import { GetOrganisationsGQL } from '../../../api/generated/get-organisations.query.generated';
import { SponsorOrganisationGQL } from '../../../api/generated/sponsor-organisation.mutation.generated';
import { OrganisationAdminOverviewActions } from './organisation-admin-overview.actions';
import { selectParams } from './organisation-admin-overview.selectors';

@Injectable()
export class OrganisationAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      OrganisationAdminOverviewActions.updateParams,
      OrganisationAdminOverviewActions.organisationDeleted,
      OrganisationAdminOverviewActions.organisationSponsored
    ),
    withLatestFrom(
      this.store.select(selectParams),
      this.store.select(selectCurrentUser),
    ),
    switchMap(([, params, user]) => this.authService.hasAnyPrivileges(['organisations_admin'])
      ? this.organisationsService.watch({ params }).valueChanges.pipe(map(response => response.data.getOrganisations as PageableList_OrganisationEntity))
      : this.organisationMembersService.watch({
          params: {
            dir: params?.dir,
            sort: params?.sort,
            page: params?.page,
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
        } as PageableList_OrganisationEntity)))
    ),
    map(result => OrganisationAdminOverviewActions.setOverviewData(result))
  ));

  sponsorOrganisation = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminOverviewActions.sponsorOrganisation),
    switchMap(action => this.dialog.open(ConfirmChangeComponent, { data: 'thisWillSponsor' })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.organisation)
          : EMPTY
        )
      )
    ),
    switchMap(organisation => this.sponsorOrganisationService.mutate({
      organisationId: organisation?.id,
    })),
    map(() => OrganisationAdminOverviewActions.organisationSponsored())
  ));

  organisationSponsored = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminOverviewActions.organisationSponsored),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'changedSuccessfully'
    }))
  ));

  deleteOrganisation = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminOverviewActions.deleteOrganisation),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.organisation?.name })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.organisation)
          : EMPTY
        )
      )
    ),
    switchMap(organisation => this.deleteOrganisationService.mutate({
      id: organisation?.id
    })),
    map(() => OrganisationAdminOverviewActions.organisationDeleted())
  ));

  organisationDeleted = createEffect(() => this.actions.pipe(
    ofType(OrganisationAdminOverviewActions.organisationDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private dialog: MatDialog,
    private deleteOrganisationService: DeleteOrganisationGQL,
    private sponsorOrganisationService: SponsorOrganisationGQL,
    private organisationsService: GetOrganisationsGQL,
    private organisationMembersService: GetOrganisationMembersGQL,
    private store: Store,
    
  ) {}
}
