import { createActionGroup, emptyProps } from '@ngrx/store';
import { FeatureEntity, Maybe, MenuItemEntity } from 'src/schema/schema';

export const PortalMenuActions = createActionGroup({
  source: 'Portal Menu',
  events: {
    'init': emptyProps(),

    'get menu': (parentId: string) => ({ parentId }),
    'set menu': (menuItems: MenuItemEntity[]) => ({ menuItems }),

    'navigate menu': (item: Maybe<MenuItemEntity>) => ({ item }),
    'navigate details': (entityId?: Maybe<string>, feature?: Maybe<FeatureEntity>) => ({ entityId, feature }),
    'not found': emptyProps(),
  },
});
