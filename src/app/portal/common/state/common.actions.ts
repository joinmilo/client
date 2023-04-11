import { createActionGroup, emptyProps } from '@ngrx/store';
import { AppEntity, FeatureEntity, Maybe, MenuItemEntity, SocialMediaEntity, UserEntity, UserEntityInput } from 'src/schema/schema';

export const CommonActions = createActionGroup({
  source: 'Portal Common',
  events: {
    'init': emptyProps(),

    'set apps': (apps: AppEntity[]) => ({ apps }),
    'set social media': (socialMedia: SocialMediaEntity[]) => ({ socialMedia }),

    'get menu': (parentId: string) => ({ parentId }),
    'set menu': (menuItems: MenuItemEntity[]) => ({ menuItems }),

    'navigate menu': (item: Maybe<MenuItemEntity>) => ({ item }),
    'navigate details': (entityId?: Maybe<string>, feature?: Maybe<FeatureEntity>) => ({ entityId, feature }),
    'not found': emptyProps(),

    'save user': (entity: UserEntityInput) => ({ entity }),
    'user saved': (entity: UserEntity) => ({ entity }),
  },
});
