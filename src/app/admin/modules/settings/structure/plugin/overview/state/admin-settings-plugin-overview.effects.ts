import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ConfirmService, ConfirmType } from 'ngx-cinlib/modals/confirm';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { ChangePluginActivationGQL } from 'src/app/admin/api/generated/change-plugin-activation.mutation.generated';
import { GetPluginsGQL } from 'src/app/admin/api/generated/get-plugins.query.generated';
import { PageableList_PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPluginOverviewActions } from './admin-settings-plugin-overview.actions';
import { selectParams } from './admin-settings-plugin-overview.selectors';

@Injectable()
export class AdminSettingsPluginOverviewEffects {
  updateParams = createEffect(() =>
    this.actions.pipe(
      ofType(
        AdminSettingsPluginOverviewActions.updateParams,
        AdminSettingsPluginOverviewActions.pluginToggled,
      ),
      withLatestFrom(this.store.select(selectParams)),
      switchMap(([, params]) => this.getPluginsService.watch({
          params,
        }).valueChanges
      ),
      map((response) =>
        AdminSettingsPluginOverviewActions.setOverviewData(
          response.data.getPlugins as PageableList_PluginEntity
        )
      )
    )
  );

  togglePlugin = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsPluginOverviewActions.togglePlugin),
      map(action => ({
        id: action.plugin?.id,
        active: !action.plugin?.active,
      })),
      switchMap(plugin => this.confirmService
        .confirm({ type: ConfirmType.Change,
          context: !plugin.active
            ? 'cautionThisWillDeactivatePlugin'
            : 'cautionThisWillActivatePlugin' })
        .pipe(
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
      map(() => AdminSettingsPluginOverviewActions.pluginToggled())
    )
  );

  constructor(
    private actions: Actions,
    private changePluginActivationService: ChangePluginActivationGQL,
    private confirmService: ConfirmService,
    private getPluginsService: GetPluginsGQL,
    private store: Store,
  ) {}
}
