import { createActionGroup, emptyProps } from '@ngrx/store';
import { DealEntity, FilterSortPaginateInput, Maybe, PageableList_DealEntity } from 'src/app/core/api/generated/schema';

export const DealAdminOverviewActions = createActionGroup({
  source: 'Deal Admin Overview',
  events: {

    'set overview data': (deals: PageableList_DealEntity) => ({ deals }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete deal': (deal?: Maybe<DealEntity>) => ({ deal }),
    'deal deleted': emptyProps(),

    'sponsor deal': (deal?: Maybe<DealEntity>) => ({ deal }),
    'deal sponsored': emptyProps(),
  }
});
