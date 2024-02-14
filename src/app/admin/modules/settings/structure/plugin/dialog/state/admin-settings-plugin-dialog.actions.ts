import { createActionGroup, emptyProps } from '@ngrx/store';
import { MenuItemEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsPluginDialogActions = createActionGroup({
  source: 'Plugin Admin Overview',
  events: {
   
    'get menu items': emptyProps(),
    'menu items retrieved': (menuItems: MenuItemEntity[]) => ({ menuItems }),
  }
});
