import { createActionGroup } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_OrganisationEntity } from 'src/app/core/api/generated/schema';

export const OrganisationAdminOverviewActions = createActionGroup({
  source: 'Organisation Admin Overview',
  events: {

    'set overview data': (organisations: PageableList_OrganisationEntity) => ({ organisations }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),
  }
});
