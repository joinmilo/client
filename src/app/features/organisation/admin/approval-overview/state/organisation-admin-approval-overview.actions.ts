import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, OrganisationEntity, PageableList_OrganisationEntity } from 'src/app/core/api/generated/schema';

export const OrganisationAdminApprovalOverviewActions = createActionGroup({
  source: 'Organisation Admin Approval Overview',
  events: {
    'set overview data': (organisations: PageableList_OrganisationEntity) => ({ organisations }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'toggle organisation approval': (organisation: Maybe<OrganisationEntity>) => ({ organisation }),
    'approval changed': emptyProps(),

    'delete organisation': (organisation?: Maybe<OrganisationEntity>) => ({ organisation }),
    'organisation deleted': emptyProps(),
  }
});
