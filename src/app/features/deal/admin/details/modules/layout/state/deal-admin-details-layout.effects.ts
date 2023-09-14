import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { DealEntity } from 'src/app/core/api/generated/schema';
import { GetDealDetailsLayoutGQL } from 'src/app/features/deal/api/generated/get-deals-details-layout.query.generated';
import { DealAdminDetailsLayoutActions } from './deal-admin-details-layout.actions';

@Injectable()
export class DealAdminDetailsLayoutEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(DealAdminDetailsLayoutActions.getDetails),
    switchMap((action) => this.getDealService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getDeal?.id
      ? DealAdminDetailsLayoutActions.setDetails(response.data.getDeal as DealEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getDealService: GetDealDetailsLayoutGQL,
  ) {}
}
