import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { PortalMenuActions } from 'src/app/portal/shared/menu/state/portal-menu.actions';
import { ContestEntity, GetContestGQL } from 'src/schema/schema';
import { PortalContestDetailsActions } from './portal-contest-details.actions';

@Injectable()
export class PortalContestDetailsEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(PortalContestDetailsActions.getDetails),
    switchMap((action) => this.getContestService.watch({
      entity: {
        slug: action.slug
      }
    }).valueChanges),
    map(response => response.data.getContest?.id
      ? PortalContestDetailsActions.setDetails(response.data.getContest as ContestEntity)
      : PortalMenuActions.notFound())
  ));

  constructor(
    private actions: Actions,
    private getContestService: GetContestGQL,
  ) { }
}
