import { createActionGroup, emptyProps } from '@ngrx/store';
import { AppEntity, Maybe, MenuItemEntity, SocialMediaEntity } from 'src/schema/schema';

export const CommonActions = createActionGroup({
  source: 'Portal Common',
  events: {
    'init': emptyProps(),

    'set apps': (apps: AppEntity[]) => ({ apps }),
    'set social media': (socialMedia: SocialMediaEntity[]) => ({ socialMedia }),

    'get menu': (parentId: string) => ({ parentId }),
    'set menu': (menuItems: MenuItemEntity[]) => ({ menuItems }),


    'navigate': (item: Maybe<MenuItemEntity>) => ({ item }),
    'not found': emptyProps(),
  },
});




