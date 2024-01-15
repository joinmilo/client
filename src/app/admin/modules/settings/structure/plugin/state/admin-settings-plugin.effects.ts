import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { ChangePluginActivationGQL } from 'src/app/admin/api/generated/change-plugin-activation.mutation.generated';
import { GetPluginsGQL } from 'src/app/admin/api/generated/get-plugins.query.generated';
import { PageableList_PluginEntity } from 'src/app/core/api/generated/schema';
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
        AdminSettingsPluginActions.pluginToggled
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

  togglePlugin = createEffect(() =>
    this.actions.pipe(
      ofType(AdminSettingsPluginActions.togglePlugin),
      map(action => ({
        id: action.plugin?.id,
        active: !action.plugin?.active,
      })),
      switchMap(plugin => this.confirmDialogService
        .confirm({ type: ConfirmType.Change,
          context: plugin.active
            ? 'thisWillActivateFeature'
            : 'cautionThisWillDeactivateFeature' }).pipe(
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
      map(() => AdminSettingsPluginActions.pluginToggled())
    )
  );

  constructor(
    private actions: Actions,
    private changePluginActivationService: ChangePluginActivationGQL,
    private confirmDialogService: ConfirmService,
    private getPluginsService: GetPluginsGQL,
    private store: Store,
  ) {}
}
