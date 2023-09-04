import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, OrganisationEntity, PageableList_OrganisationEntity } from 'src/app/core/api/generated/schema';

export const OrganisationAdminOverviewActions = createActionGroup({
  source: 'Organisation Admin Overview',
  events: {

    'set overview data': (organisations: PageableList_OrganisationEntity) => ({ organisations }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete organisation': (organisation?: Maybe<OrganisationEntity>) => ({ organisation }),
    'organisation deleted': emptyProps(),

    'sponsor organisation': (organisation?: Maybe<OrganisationEntity>) => ({ organisation }),
    'organisation sponsored': emptyProps(),
  }
});
