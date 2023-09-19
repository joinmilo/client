import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_ReportEntity, ReportEntity } from 'src/app/core/api/generated/schema';

export const ReportAdminOverviewActions = createActionGroup({
  source: 'Report Admin Overview',
  events: {
    'set overview data': (reports: PageableList_ReportEntity) => ({ reports }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete report': (report?: Maybe<ReportEntity>) => ({ report }),
    'report deleted': emptyProps(),
  }
});
