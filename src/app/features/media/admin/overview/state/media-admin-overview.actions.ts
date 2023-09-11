import { createActionGroup } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_InfoMediaEntity } from 'src/app/core/api/generated/schema';

export const MediaAdminOverviewActions = createActionGroup({
  source: 'Media Admin Overview',
  events: {
    'set overview media': (media: PageableList_InfoMediaEntity) => ({ media }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),
  }
});
