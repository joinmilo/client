import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_ReportTypeEntity, ReportTypeEntity } from 'src/app/core/api/generated/schema';

export const ReportAdminTypesActions = createActionGroup({
  source: 'Report Admin Types',
  events: {
    'set types data': (reports: PageableList_ReportTypeEntity) => ({ reports }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete type': (reportType?: Maybe<ReportTypeEntity>) => ({ reportType }),
    'type deleted': emptyProps(),
  }
});
