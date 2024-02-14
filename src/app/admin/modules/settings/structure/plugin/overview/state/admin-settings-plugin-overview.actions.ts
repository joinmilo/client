import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_PluginEntity, PluginEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsPluginOverviewActions = createActionGroup({
  source: 'Plugin Admin Overview',
  events: {

    'set overview data': (plugins: PageableList_PluginEntity) => ({ plugins }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'toggle plugin': (plugin?: Maybe<PluginEntity>) => ({ plugin }),
    'plugin toggled': emptyProps(),
  }
});
