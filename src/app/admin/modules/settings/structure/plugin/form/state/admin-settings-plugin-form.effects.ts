import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { map, switchMap, tap } from 'rxjs';
import { GetPluginGQL } from 'src/app/admin/api/generated/get-plugin.query.generated';
import { SavePluginGQL } from 'src/app/admin/api/generated/save-plugin.mutation.generated';
import { AdminActions } from 'src/app/admin/state/admin.actions';
import { PluginEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { AdminSettingsPluginFormActions } from './admin-settings-plugin-form.actions';

@Injectable()
export class AdminSettingsPluginFormEffects {

  getPlugin = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPluginFormActions.getPlugin),
    switchMap((action) => this.getPluginService.watch({
      entity: {
        code: action.code
      }
    }).valueChanges),
    map(response => response.data.getPlugin?.id
      ? AdminSettingsPluginFormActions.setPlugin(response.data.getPlugin as PluginEntity)
      : AdminActions.notFound())
  ));

  cancelled = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPluginFormActions.cancelled),
    tap(() => this.router.navigate([`/admin/settings/structure/plugin/overview`])),
  ), { dispatch: false });


  save = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPluginFormActions.save),
    switchMap(action => this.savePluginService.mutate({
      entity: action.menuItem
    })),
    map(() => AdminSettingsPluginFormActions.saved())
  ));

  saved = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPluginFormActions.saved),
    tap(() => this.router.navigate([`/admin/settings/structure/plugin/overview`])),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'savedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private getPluginService: GetPluginGQL,
    private router: Router,
    private savePluginService: SavePluginGQL,
  ) {}
}
