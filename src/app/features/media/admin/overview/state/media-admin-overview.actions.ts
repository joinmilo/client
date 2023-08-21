import { createActionGroup } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_InfoMediaEntity } from 'src/schema/schema';

export const MediaAdminOverviewActions = createActionGroup({
  source: 'Media Admin Overview',
  events: {

    'set overview data': (media: PageableList_InfoMediaEntity) => ({ media }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),
  }
});
