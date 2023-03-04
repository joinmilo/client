import { createActionGroup, emptyProps } from '@ngrx/store';
import { AppEntity, MenuItemEntity, SocialMediaEntity } from 'src/schema/schema';

export const CommonActions = createActionGroup({
  source: 'Portal Common',
  events: {
    'get apps': emptyProps(),
    'set apps': (apps: AppEntity[]) => ({ apps }),

    'get menu': emptyProps(),
    'set menu': (menuItems: MenuItemEntity[]) => ({ menuItems }),

    'get social media': emptyProps(),
    'set social media': (socialMedia: SocialMediaEntity[]) => ({ socialMedia }),

    'not found': emptyProps(),
  },
});




