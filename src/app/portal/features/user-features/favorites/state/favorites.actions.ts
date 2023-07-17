import { createActionGroup } from '@ngrx/store';
import { Maybe, PageableList_UserContextEntity, UserContextEntity } from 'src/schema/schema';

export const PortalFavoritesActions = createActionGroup({
  source: 'Portal Favorites',
  events: {
    'get favorite events': (events?: Maybe<UserContextEntity>) => ({ events }),
    'set favorite events': (events?: Maybe<PageableList_UserContextEntity>) => ({ events }),
  }
});




