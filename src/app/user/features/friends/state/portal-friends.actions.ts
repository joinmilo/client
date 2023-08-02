import { createActionGroup } from "@ngrx/store";
import { FriendEntity, FriendEntityInput, Maybe, UserContextEntity } from 'src/schema/schema';

export const PortalFriendsActions = createActionGroup({
  source: 'Portal Friends',
  events: {
    'get users': (query?: Maybe<string>) => ({ query }),
    'set users': (users?: Maybe<UserContextEntity[]>) => ({ users}),

    'send friend requests': (friendRequests: FriendEntityInput[]) => ({friendRequests}),
    'friend requests sent': (friendRequests: Maybe<FriendEntity[]>) => ({friendRequests}) 
   }
});