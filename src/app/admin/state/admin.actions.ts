import { createActionGroup, emptyProps } from '@ngrx/store';
import { PluginEntity } from 'src/app/core/api/generated/schema';
import { AdminMenuItem, AdminRoutes } from '../typings/menu';

export const AdminActions = createActionGroup({
  source: 'Admin',
  events: {
    'init': emptyProps(),
    'open menu': emptyProps(),
    'close menu': emptyProps(),

    'add main routes': (routes: AdminRoutes) => ({ routes }),
    'add settings menu': (item: AdminMenuItem) => ({ item }),

    'get features': emptyProps(),
    'set features': (features?: PluginEntity[]) => ({ features }),

    'not found': emptyProps(),
  }
});




