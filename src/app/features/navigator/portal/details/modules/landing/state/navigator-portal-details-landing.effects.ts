import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { NavigatorNodeEntity } from 'src/app/core/api/generated/schema';
import { GetNavigatorNodeDetailsGQL } from 'src/app/features/navigator/api/generated/get-navigator-details.query.generated';
import { PortalActions } from 'src/app/portal/state/portal.actions';
import { NavigatorPortalDetailsLandingActions } from './navigator-portal-details-landing.actions';


@Injectable()
export class NavigatorPortalDetailsLandingEffects {

  getDetails = createEffect(() => this.actions.pipe(
    ofType(NavigatorPortalDetailsLandingActions.getDetails),
    switchMap(() => this.getNavigatorNodeService.watch({
      entity: {
        parents: null
      }
    }).valueChanges),
    map(response => response.data.getNavigatorNode?.id
      ? NavigatorPortalDetailsLandingActions.setDetails(response.data.getNavigatorNode as NavigatorNodeEntity)
      : PortalActions.notFound())
  ));

  // updateDetails = createEffect(() => this.actions.pipe(
  //   ofType(
  //     NavigatorPortalDetailsLandingActions.NavigatorCommentSaved,
  //   ),
  //   withLatestFrom(this.store.select(selectNavigatorDetails)),
  //   switchMap(([, NavigatorDetails]) => this.getNavigatorNodeService.watch({
  //     entity: {
  //       slug: NavigatorDetails?.slug
  //     }
  //   }).valueChanges),
  //   map(response => response.data.getNavigator?.id
  //     ? NavigatorPortalDetailsLandingActions.detailsUpdated(response.data.getNavigator as NavigatorEntity)
  //     : PortalActions.notFound())
  // ));

  // detailsUpdated = createEffect(() => this.actions.pipe(
  //   ofType(NavigatorPortalDetailsLandingActions.detailsUpdated),
  //   map(() => CoreUserActions.updateUser())
  // ));
  
  constructor(
    private actions: Actions,
    private getNavigatorNodeService: GetNavigatorNodeDetailsGQL

  ) { }
}
