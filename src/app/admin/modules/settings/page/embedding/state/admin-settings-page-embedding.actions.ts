import { createActionGroup, emptyProps } from '@ngrx/store';
import { PageEmbeddingTypeEntity, PluginEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsPageEmbeddingActions = createActionGroup({
  source: 'Admin Settings Page Embedding',
  events: {
    'get plugins': emptyProps(),
    'plugins retrieved ': (plugins: PluginEntity[]) => ({ plugins }),

    'get embedding types': emptyProps(),
    'embedding types retrieved': (embeddingTypes: PageEmbeddingTypeEntity[]) => ({ embeddingTypes }),
  }
});
