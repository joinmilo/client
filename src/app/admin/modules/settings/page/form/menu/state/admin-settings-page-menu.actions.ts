import { createActionGroup, emptyProps } from '@ngrx/store';
import { MenuItemEntity, MenuItemEntityInput } from 'src/app/core/api/generated/schema';

export const AdminSettingsPageMenuActions = createActionGroup({
  source: 'Admin Settings Page Menu',
  events: {
    'get parent menu items': emptyProps(),
    'parent menu items retrieved': (parents: MenuItemEntity[]) => ({ parents }),

    'save parent menu': (menuItem: MenuItemEntityInput) => ({ menuItem }),
  }
});
