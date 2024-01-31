import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FeedbackType } from 'ngx-cinlib/modals/feedback';
import { filter, map, switchMap, withLatestFrom } from 'rxjs';
import { SaveConfigurationGQL } from 'src/app/admin/api/generated/save-configuration.mutation.generated';
import { GetConfigurationsGQL } from 'src/app/core/api/generated/get-configurations.query.generated';
import { PageableList_ConfigurationEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { AdminSettingsConfiguratioActions } from './admin-settings-configuration.actions';
import { selectParams } from './admin-settings-configuration.selectors';

@Injectable()
export class AdminSettingsConfigurationEffects {

  updateParams = createEffect(() => this.actions.pipe(
    ofType(
      AdminSettingsConfiguratioActions.updateParams,
      AdminSettingsConfiguratioActions.configurationSaved,
    ),
    withLatestFrom(this.store.select(selectParams)),
    switchMap(([, params]) => this.getConfigurationsService.watch({
      params,
    }).valueChanges),
    map(response => AdminSettingsConfiguratioActions.setOverviewData(response.data.getConfigurations as PageableList_ConfigurationEntity))
  ));

  saveConfiguration = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsConfiguratioActions.saveConfiguration),
    switchMap(action => this.saveConfigurationService.mutate({
      entity: action.configuration
    })),
    filter(response => !!response?.data?.saveConfiguration?.id),
    map(() => AdminSettingsConfiguratioActions.configurationSaved())
  ));

  configurationSaved = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsConfiguratioActions.configurationSaved),
    map(() => CoreActions.setFeedback({
      type: FeedbackType.Success,
      labelMessage: 'changedSuccessfully'
    }))
  ));

  constructor(
    private actions: Actions,
    private getConfigurationsService: GetConfigurationsGQL,
    private saveConfigurationService: SaveConfigurationGQL,
    private store: Store,
  ) {}
}
