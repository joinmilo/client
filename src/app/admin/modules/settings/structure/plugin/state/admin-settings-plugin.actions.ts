import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, MenuItemEntity, MenuItemEntityInput, PageableList_PluginEntity, PluginEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsPluginActions = createActionGroup({
  source: 'Plugin Admin Overview',
  events: {

    'set overview data': (plugins: PageableList_PluginEntity) => ({ plugins }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'deactivate plugin': (plugin?: Maybe<PluginEntity>) => ({ plugin }),
    'plugin deactivated': emptyProps(),
    
    'get menu items': emptyProps(),
    'menu items retrieved': (menuItems: MenuItemEntity[]) => ({ menuItems }),

    'save plugin menu item': (menuItem: MenuItemEntityInput, childMenuItem: Maybe<MenuItemEntity>, plugin: Maybe<PluginEntity>,) => ({ menuItem, childMenuItem, plugin }),
    'menu item plugin saved': emptyProps(),
  }
});
