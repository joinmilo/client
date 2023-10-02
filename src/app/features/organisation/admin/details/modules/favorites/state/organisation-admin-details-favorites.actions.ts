import { createActionGroup } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';



export const OrganisationAdminDetailsFavoritesActions = createActionGroup({
  source: 'Organisation Admin Details Favorites',
  events: {
    'set favorites': (comments: PageableList_UserContextEntity) => ({ comments }),
    'update params': (slug: Maybe<string> , params?: FilterSortPaginateInput) => ({ slug, params }),
  }
});
