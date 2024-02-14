import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe, MenuItemEntityInput, PluginEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsPluginFormActions = createActionGroup({
  source: 'Plugin Admin Overview',
  events: {
    
    'get plugin': (code: Maybe<string>) => ({ code }),
    'set plugin': (plugin: Maybe<PluginEntity>) => ({ plugin }),

    'save': (menuItem: MenuItemEntityInput) => ({ menuItem }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),
  }
});
