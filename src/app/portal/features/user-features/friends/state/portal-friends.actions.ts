import { createActionGroup } from "@ngrx/store";
import { FilterSortPaginateInput, PageableList_UserContextEntity } from "src/schema/schema";

export const PortalFriendsActions = createActionGroup({
  source: 'Portal Friends',
  events: {
    'get friends': (params?: FilterSortPaginateInput) => ({ params }),
    'set friends': (friends: PageableList_UserContextEntity) => ({ friends }),
  }
});