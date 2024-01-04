import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetMenuItemsGQL } from 'src/app/admin/api/generated/get-menu-items.query.generated';
import { SaveMenuItemGQL } from 'src/app/admin/api/generated/save-menu-item.mutation.generated';
import { MenuItemEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { AdminSettingsPageMenuActions } from './admin-settings-page-menu.actions';

@Injectable()
export class AdminSettingsPageMenuEffects {

  getMenuItems = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageMenuActions.getParentMenuItems),
    switchMap(() => this.getMenuItemsService.watch({
      params: {
        expression: {
          entity: {
            path: 'parent',
            operator: QueryOperator.Equal,
            value: null,
          }
        }
      }
    }).valueChanges),
    map(response => AdminSettingsPageMenuActions.parentMenuItemsRetrieved(response.data.getMenuItems?.result as MenuItemEntity[]))
  ));

  saveParentMenu = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageMenuActions.saveParentMenu),
    switchMap(action => this.saveMenuItemService.mutate({
      entity: action.menuItem,
    })),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));
  
  constructor(
    private actions: Actions,
    private getMenuItemsService: GetMenuItemsGQL,
    private saveMenuItemService: SaveMenuItemGQL) { }
}
