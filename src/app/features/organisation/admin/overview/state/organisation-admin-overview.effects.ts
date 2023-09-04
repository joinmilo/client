import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_OrganisationEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmChangeComponent } from 'src/app/shared/dialogs/confirm-change/confirm-change.component';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { DeleteOrganisationGQL } from '../../../api/generated/delete-organisation.mutation.generated';
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
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.organisationsService.watch({
      params,
    }).valueChanges),
    map(response => OrganisationAdminOverviewActions.setOverviewData(response.data.getOrganisations as PageableList_OrganisationEntity))
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
    private dialog: MatDialog,
    private deleteOrganisationService: DeleteOrganisationGQL,
    private sponsorOrganisationService: SponsorOrganisationGQL,
    private organisationsService: GetOrganisationsGQL,
    private store: Store,
    
  ) {}
}
