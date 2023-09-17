import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { FilterSortPaginateInput, PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';



export const EventAdminDetailsFavoritesActions = createActionGroup({
  source: 'Event Admin Details Favorites',
  events: {
    'set favorites': (comments: PageableList_UserContextEntity) => ({ comments }),
    'update params': (slug: Maybe<string> , params?: FilterSortPaginateInput) => ({ slug,  params }),
  }
});
