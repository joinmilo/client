import { createActionGroup, emptyProps } from '@ngrx/store';
import { PageWidgetTypeEntity, PluginEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsPageEmbeddingActions = createActionGroup({
  source: 'Admin Settings Page Embedding',
  events: {
    'get plugins': emptyProps(),
    'plugins retrieved ': (plugins: PluginEntity[]) => ({ plugins }),

    'get widget types': emptyProps(),
    'widget types retrieved': (widgetTypes: PageWidgetTypeEntity[]) => ({ widgetTypes }),
  }
});
