import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, of, switchMap, withLatestFrom } from 'rxjs';
import { ChangePluginActivationGQL } from 'src/app/admin/api/generated/change-plugin-activation.mutation.generated';
import { GetPluginsGQL } from 'src/app/admin/api/generated/get-plugins.query.generated';
import { PageableList_PluginEntity } from 'src/app/core/api/generated/schema';
import { ConfirmChangeComponent } from 'src/app/shared/dialogs/confirm-change/confirm-change.component';
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
      switchMap(plugin => this.dialog.open(ConfirmChangeComponent, {
          data: plugin.active
            ? 'thisWillActivateFeature'
            : 'cautionThisWillDeactivateFeature'
        }).afterClosed().pipe(
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
    private dialog: MatDialog,
    private getPluginsService: GetPluginsGQL,
    private changePluginActivationService: ChangePluginActivationGQL,
    private store: Store
  ) {}
}
