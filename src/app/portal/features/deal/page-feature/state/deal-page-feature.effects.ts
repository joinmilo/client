import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { DealEntity, GetDealsGQL } from 'src/schema/schema';
import { DealPageFeatureActions } from './deal-page-feature.actions';

@Injectable()
export class DealPageFeatureEffects {

  getRecentDeals = createEffect(() => this.actions.pipe(
    ofType(DealPageFeatureActions.getRecentDeals),
    switchMap(() => this.getDealsService.watch({
      params: {
        sort: 'modified',
        dir: 'desc',
        size: 10,
      }
     }).valueChanges),
    map(response => DealPageFeatureActions.setRecentDeals(response.data.getDeals?.result as DealEntity[]))
  ));

  constructor(
    private actions: Actions,
    private getDealsService: GetDealsGQL,
  ) {}
}
