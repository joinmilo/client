import { createActionGroup } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';



export const OrganisationAdminDetailsEventsActions = createActionGroup({
  source: 'Organisation Admin Details Events',
  events: {
    'set events': (comments: PageableList_UserContextEntity) => ({ comments }),
    'update params': (slug: Maybe<string> , params?: FilterSortPaginateInput) => ({ slug, params }),
  }
});
