import { createActionGroup } from "@ngrx/store";
import { Maybe, UserContextEntity } from 'src/schema/schema';

export const PortalFriendsActions = createActionGroup({
  source: 'Portal Friends',
  events: {
    'get users': (query?: Maybe<string>) => ({ query }),
    'set users': (users?: Maybe<UserContextEntity[]>) => ({ users})
   }
});