import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { DealEntity, GetDealGQL } from 'src/schema/schema';
import { PortalDealDetailsActions } from './portal-deal-details.actions';

@Injectable()
export class PortalDealDetailsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(PortalDealDetailsActions.getDetails),
    switchMap((action) => this.getDealService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getDeal?.id
      ? PortalDealDetailsActions.setDetails(response.data.getDeal as DealEntity)
      : PortalMenuActions.notFound())
  ));


  constructor(
    private actions: Actions,
    private getDealService: GetDealGQL,
  ) { }
}
