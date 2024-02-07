import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { ChangePluginActivationGQL } from 'src/app/admin/api/generated/change-plugin-activation.mutation.generated';
import { GetMenuItemsGQL } from 'src/app/admin/api/generated/get-menu-items.query.generated';
import { GetPluginsGQL } from 'src/app/admin/api/generated/get-plugins.query.generated';
import { SaveMenuItemGQL } from 'src/app/admin/api/generated/save-menu-item.mutation.generated';
import { ConjunctionOperator, MenuItemEntity, PageableList_PluginEntity, QueryOperator } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { ConfirmService } from 'src/app/shared/confirm/service/confirm.service';
import { ConfirmType } from 'src/app/shared/confirm/typings/confirm';
import { AdminSettingsPluginActions } from './admin-settings-plugin.actions';
import { selectParams } from './admin-settings-plugin.selectors';

@Injectable()
export class AdminSettingsPluginEffects {
  updateParams = createEffect(() =>
    this.actions.pipe(
      ofType(
        AdminSettingsPluginActions.updateParams,
        AdminSettingsPluginActions.pluginDeactivated,
        AdminSettingsPluginActions.menuItemPluginSaved,
      ),
      withLatestFrom(this.store.select(selectParams)),
      switchMap(([, params]) => this.getPluginsService.watch({
          params,
        }).valueChanges
      ),
      map((response) =>
        AdminSettingsPluginActions.setOverviewData(
          response.data.getPlugins as PageableList_PluginEntity
        )
      )
    )
  );

  deactivatePlugin = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsPluginActions.deactivatePlugin),
      map(action => ({
        id: action.plugin?.id,
        active: !action.plugin?.active,
      })),
      switchMap(plugin => this.confirmDialogService
        .confirm({ type: ConfirmType.Change,
          context: !plugin.active
            ? 'cautionThisWillDeactivatePlugin'
            : undefined }).pipe(
          switchMap(confirmed => confirmed
            ? of(plugin)
            : EMPTY
          )
        )
      ),
      switchMap(entity => this.changePluginActivationService.mutate({
        pluginId: entity.id,
        active: entity.active
      })),
      map(() => AdminSettingsPluginActions.pluginDeactivated())
    )
  );

  getMenuItems = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPluginActions.getMenuItems),
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
    map(response => AdminSettingsPluginActions.menuItemsRetrieved(response.data.getMenuItems?.result as MenuItemEntity[]))
  ));

  savePluginMenuItem = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPluginActions.savePluginMenuItem),
    tap((action) => console.log(action)),
    switchMap(action => this.saveMenuItemService.mutate({
      entity: {
        parent: action.menuItem,
        id: action.childMenuItem?.id,        
      },
    })
    .pipe(
      switchMap(() => this.changePluginActivationService.mutate({
        pluginId: action.plugin?.id,
        active: !action.plugin?.active
      })),
    )),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    })),
    map(() => AdminSettingsPluginActions.menuItemPluginSaved())
  ));

  constructor(
    private actions: Actions,
    private changePluginActivationService: ChangePluginActivationGQL,
    private confirmDialogService: ConfirmService,
    private getMenuItemsService: GetMenuItemsGQL,
    private getPluginsService: GetPluginsGQL,
    private saveMenuItemService: SaveMenuItemGQL,
    private store: Store,
  ) {}
}
