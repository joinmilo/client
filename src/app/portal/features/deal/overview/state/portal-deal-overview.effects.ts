import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { DealEntity, GetDealGQL, GetDealsGQL, PageableList_DealEntity } from 'src/schema/schema';
import { PortalDealOverviewActions } from './portal-deal-overview.actions';
import { selectParams } from './portal-deal-overview.selectors';

@Injectable()
export class PortalDealOverviewEffects {

  getSponsoredDeal = createEffect(() => this.actions.pipe(
    ofType(PortalDealOverviewActions.getSponsoredDeal),
    switchMap(() => this.getDealService.watch({ 
      // entity: {
      //   sponsored: true
      // }
    }).valueChanges),
    map(response => PortalDealOverviewActions.setSponsoredDeal(response.data.getDeal as DealEntity))
  ));

  updateParams = createEffect(() => this.actions.pipe(
    ofType(PortalDealOverviewActions.updateParams),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getDealsService.watch({ 
      params,
    }).valueChanges),
    map(response => PortalDealOverviewActions.setOverviewData(response.data.getDeals as PageableList_DealEntity))
  ));

  constructor(
    private actions: Actions,
    private getDealService: GetDealGQL,
    private getDealsService: GetDealsGQL,
    private store: Store,
  ) {}
}
