import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, OnInitEffects, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs';
import { adminUrl } from 'src/app/core/constants/core.constants';
import { FeatureEntity, GetFeaturesGQL, QueryOperator } from 'src/schema/schema';
import { AdminActions } from './admin.actions';

@Injectable()
export class AdminEffects implements OnInitEffects {

  ngrxOnInitEffects(): Action {
    return AdminActions.init();
  }

  getFeatures = createEffect(() => this.actions.pipe(
    ofType(AdminActions.init),
    switchMap(() => this.getFeatureService.watch({
      params: {
        expression: {
          entity: {
            path: 'active',
            operator: QueryOperator.Equal,
            value: 'true',
          }
        }
      }
    }).valueChanges),
    map(response => AdminActions.setFeatures(response.data.getFeatures?.result as FeatureEntity[])),
  ));

  notFound = createEffect(() => this.actions.pipe(
    ofType(AdminActions.notFound),
    tap(() => this.router.navigate(['/', adminUrl, '404'])),
  ), { dispatch: false });

  // navigateDetails = createEffect(() => this.actions.pipe(
  //   ofType(PortalMenuActions.navigateDetails),
  //   tap(action => this.router.navigate(['portal', action.feature?.code, action.slug])),
  // ), { dispatch: false });

  // navigateMenu = createEffect(() => this.actions.pipe(
  //   ofType(PortalMenuActions.navigateMenu),
  //   tap(action => {
  //     action?.item?.feature?.code
  //       ? this.router.navigate(['/', portalUrl, action.item.feature.code])
  //       : action?.item?.page?.slug
  //         ? this.router.navigate(['/', portalUrl, action.item.page.slug])
  //         : this.router.navigate(['/', portalUrl, '404']);
  //   }),
  // ), { dispatch: false });

  // notFound = createEffect(() => this.actions.pipe(
  //   ofType(PortalMenuActions.notFound),
  //   tap(() => this.router.navigate(['/', portalUrl, '404'])),
  // ), { dispatch: false });

  constructor(
    private actions: Actions,
    private getFeatureService: GetFeaturesGQL,
    private router: Router,
  ) { }
}
