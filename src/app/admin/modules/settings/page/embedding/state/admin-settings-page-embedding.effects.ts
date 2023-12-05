import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { GetEmbeddingTypesGQL } from 'src/app/admin/api/generated/get-page-embeddings-types.query.generated';
import { GetPluginsGQL } from 'src/app/admin/api/generated/get-plugins.query.generated';
import { ConjunctionOperator, PageEmbeddingTypeEntity, PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageEmbeddingActions } from './admin-settings-page-embedding.actions';

@Injectable()
export class AdminSettingsPageEmbeddingEffects {

  getPlugins = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageEmbeddingActions.getPlugins),
    switchMap(() => this.getPluginsService.watch({
      params: {
        expression: {
          conjunction: {
            operator: ConjunctionOperator.And,
            operands: [
              {
                entity: {
                  path: 'active',
                  value: 'true'
                }
              },
              {
                entity: {
                  path: 'released',
                  value: 'true'
                }
              }
            ]
          }
        }
      }
    })
      .valueChanges
    ),
    map(response => AdminSettingsPageEmbeddingActions
      .pluginsRetrieved(response.data.getPlugins?.result as PluginEntity[]))
  ));

  getWidgetTypes = createEffect(() => this.actions.pipe(
    ofType(AdminSettingsPageEmbeddingActions.getEmbeddingTypes),
    switchMap(() => this.getWidgetTypesService.watch({})
      .valueChanges
    ),
    map(response => AdminSettingsPageEmbeddingActions
      .embeddingTypesRetrieved(response.data.getPageEmbeddingTypes?.result as PageEmbeddingTypeEntity[]))
  ));
  
  constructor(
    private actions: Actions,
    private getPluginsService: GetPluginsGQL,
    private getWidgetTypesService: GetEmbeddingTypesGQL) { }
}
