import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { FilterSortPaginateInput, PageableList_UserContextEntity } from 'src/app/core/api/generated/schema';

import { Period } from 'src/app/core/typings/period';


export const OrganisationAdminDetailsFavoritesActions = createActionGroup({
  source: 'Organisation Admin Details Favorites',
  events: {
    'set favorites': (comments: PageableList_UserContextEntity) => ({ comments }),
    'update params': (slug: Maybe<string> , period?: Period, params?: FilterSortPaginateInput) => ({ slug, period, params }),
  }
});
