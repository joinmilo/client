import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_DealEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmChangeComponent } from 'src/app/shared/dialogs/confirm-change/confirm-change.component';
import { ConfirmDeleteComponent } from 'src/app/shared/dialogs/confirm-delete/confirm-delete.component';
import { DeleteDealGQL } from '../../../api/generated/delete-deal.mutation.generated';
import { GetDealsGQL } from '../../../api/generated/get-deals.query.generated';
import { SponsorDealGQL } from '../../../api/generated/sponsor-deal.mutation.generated';
import { DealAdminOverviewActions } from './deal-admin-overview.actions';
import { selectParams } from './deal-portal-overview.selectors';

@Injectable()
export class DealAdminOverviewEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      DealAdminOverviewActions.updateParams,
      DealAdminOverviewActions.dealDeleted,
      DealAdminOverviewActions.dealSponsored
      ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getDealsService.watch({
      params,
    }).valueChanges),
    map(response => DealAdminOverviewActions.setOverviewData(response.data.getDeals as PageableList_DealEntity))
  ));

  sponsorDeal = createEffect(() => this.actions.pipe(
    ofType(DealAdminOverviewActions.sponsorDeal),
    switchMap(action => this.dialog.open(ConfirmChangeComponent, { data: 'thisWillSponsor' })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.deal)
          : EMPTY
        )
      )
    ),
    switchMap(deal => this.sponsorDealService.mutate({
      dealId: deal?.id,
    })),
    map(() => DealAdminOverviewActions.dealSponsored())
  ));

  dealSponsored = createEffect(() => this.actions.pipe(
    ofType(DealAdminOverviewActions.dealSponsored),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'changedSuccessfully'
    }))
  ));

  deleteDeal = createEffect(() => this.actions.pipe(
    ofType(DealAdminOverviewActions.deleteDeal),
    switchMap(action => this.dialog.open(ConfirmDeleteComponent, { data: action.deal?.name })
      .afterClosed().pipe(
        switchMap(confirmed => confirmed
          ? of(action.deal)
          : EMPTY
        )
      )
    ),
    switchMap(deal => this.deleteDealService.mutate({
      id: deal?.id
    })),
    map(() => DealAdminOverviewActions.dealDeleted())
  ));

  dealDeleted = createEffect(() => this.actions.pipe(
    ofType(DealAdminOverviewActions.dealDeleted),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'deletedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private dialog: MatDialog,
    private getDealsService: GetDealsGQL,
    private sponsorDealService: SponsorDealGQL,
    private deleteDealService: DeleteDealGQL,
    private store: Store,
  ) {}
}
