import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, OnInitEffects, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs';
import { PluginEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { adminUrl } from 'src/app/core/constants/module.constants';
import { GetPluginsGQL } from '../api/generated/get-plugins.query.generated';
import { AdminActions } from './admin.actions';

@Injectable()
export class AdminEffects implements OnInitEffects {

  ngrxOnInitEffects(): Action {
    return AdminActions.init();
  }

  getFeatures = createEffect(() => this.actions.pipe(
    ofType(AdminActions.init),
    switchMap(() => this.getPluginsService.watch({
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
    map(response => AdminActions.setFeatures(response.data.getPlugins?.result as PluginEntity[])),
  ));

  notFound = createEffect(() => this.actions.pipe(
    ofType(AdminActions.notFound),
    tap(() => this.router.navigate(['/', adminUrl, '404'])),
  ), { dispatch: false });

  constructor(
    private actions: Actions,
    private getPluginsService: GetPluginsGQL,
    private router: Router,
  ) { }
}
