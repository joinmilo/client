import { createActionGroup } from "@ngrx/store";
import { FriendEntity, FriendEntityInput, Maybe, UserContextEntity } from 'src/schema/schema';

export const PortalFriendsActions = createActionGroup({
  source: 'Portal Friends',
  events: {
    'get users': (query?: Maybe<string>) => ({ query }),
    'set users': (filteredUsers?: Maybe<UserContextEntity[]>) => ({ filteredUsers }),

    'send friend requests': (friendRequests: FriendEntityInput[]) => ({ friendRequests }),
    'friend requests sent': (friendRequests: Maybe<FriendEntity[]>) => ({ friendRequests }),
    
    'accept friend request': (friendRequester: FriendEntityInput) => ({ friendRequester }),
    'friend request accepted': (friendRequester: Maybe<FriendEntity>) => ({ friendRequester }),

    'delete friend entity': (id?: Maybe<string>)  => ({ id }),
    'friend entity deleted': (deleted?: Maybe<boolean>) => ({ deleted }),
   
    'update friends': (friends: Maybe<UserContextEntity[]>) => ({ friends }), 
    'friends updated': (friends: Maybe<UserContextEntity[]>) => ({ friends }),
   }
});