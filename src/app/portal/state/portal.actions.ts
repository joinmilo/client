import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe, MenuItemEntity, PluginEntity } from 'src/app/core/api/generated/schema';

export const PortalActions = createActionGroup({
  source: 'Portal',
  events: {
    'init': emptyProps(),

    'set menu': (menuItems: MenuItemEntity[]) => ({ menuItems }),

    'navigate menu': (item: Maybe<MenuItemEntity>) => ({ item }),
    'navigate details': (slug?: Maybe<string>, feature?: Maybe<PluginEntity>) => ({ slug, feature }),
    'not found': emptyProps(),
  },
});
