import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { DealEntity } from 'src/app/core/api/generated/schema';
import { GetDealDetailsGQL } from 'src/app/features/deal/api/generated/get-deal-details.query.generated';
import { DealAdminDetailsLandingActions } from './deal-admin-details-landing.actions';

@Injectable()
export class DealAdminDetailsLandingEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(DealAdminDetailsLandingActions.getDetails),
    switchMap((action) => this.getDealService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getDeal?.id
      ? DealAdminDetailsLandingActions.setDetails(response.data.getDeal as DealEntity)
      : AdminActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getDealService: GetDealDetailsGQL,
  ) {}
}
