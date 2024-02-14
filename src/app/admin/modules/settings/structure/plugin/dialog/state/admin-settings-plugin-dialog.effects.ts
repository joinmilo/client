import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetMenuItemsGQL } from 'src/app/admin/api/generated/get-menu-items.query.generated';
import { ConjunctionOperator, MenuItemEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { AdminSettingsPluginDialogActions } from './admin-settings-plugin-dialog.actions';

@Injectable()
export class AdminSettingsPluginDialogEffects {

  getMenuItems = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPluginDialogActions.getMenuItems),
    switchMap(() => this.getMenuItemsService.watch({
      params: {
        expression: {
          conjunction: {
            operator: ConjunctionOperator.And,
            operands: [
              {
                entity: {
                  path: 'page.id',
                  operator: QueryOperator.Equal,
                  value: null,
                }
              },
              {
                entity: {
                  path: 'parent.id',
                  operator: QueryOperator.Equal,
                  value: null,
                }
              },
              {
                entity: {
                  path: 'plugin.id',
                  operator: QueryOperator.Equal,
                  value: null,
                }
              },
            ]
          }
        }
      }
    }).valueChanges),
    map(response => AdminSettingsPluginDialogActions.menuItemsRetrieved(response.data.getMenuItems?.result as MenuItemEntity[]))
  ));


  constructor(
    private actions: Actions,
    private getMenuItemsService: GetMenuItemsGQL,
  ) {}
}
