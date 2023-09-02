import { Injectable } from '@angular/core';
import { Actions, OnInitEffects, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs';
import { FeatureEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { GetFeaturesGQL } from '../api/generated/get-features.query.generated';
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

  constructor(
    private actions: Actions,
    private getFeatureService: GetFeaturesGQL,
  ) { }
}
