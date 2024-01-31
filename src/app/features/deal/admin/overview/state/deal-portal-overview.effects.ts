import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { PageableList_DealEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { selectCurrentUser } from 'src/app/core/state/selectors/user.selectors';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
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
    withLatestFrom(
      this.store.select(selectParams),
      this.store.select(selectCurrentUser),
    ),
    map(([, params, user]) => this.authService.hasAnyPrivileges(['deals_admin'])
      ? params
      : {
        ...params,
          expression: {
            conjunction: {
              operands: [
                {
                  entity: {
                    path: 'creator.id', 
                    operator: QueryOperator.Equal,
                    value: user?.id as string
                  }
                }
              ]
            }
          }
    }),
    switchMap(params => this.getDealsService.watch({ params }).valueChanges),
    map(response => DealAdminOverviewActions.setOverviewData(response.data.getDeals as PageableList_DealEntity))
  ));

  sponsorDeal = createEffect(() => this.actions.pipe(
    ofType(DealAdminOverviewActions.sponsorDeal),
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmType.Delete, context: 'thisWillSponsor' }).pipe(
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
    switchMap(action => this.confirmDialogService
      .confirm({ type: ConfirmType.Delete, context: action.deal?.name }).pipe(
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
    private authService: AuthService,
    private confirmDialogService: ConfirmService,
    private deleteDealService: DeleteDealGQL,
    private getDealsService: GetDealsGQL,
    private sponsorDealService: SponsorDealGQL,
    private store: Store,
  ) {}
}
