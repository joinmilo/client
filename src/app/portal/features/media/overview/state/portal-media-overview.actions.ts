import { createActionGroup } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_InfoMediaEntity } from 'src/schema/schema';

export const PortalMediaOverviewActions = createActionGroup({
  source: 'Portal Media Overview',
  events: {
    'set overview media': (media: PageableList_InfoMediaEntity) => ({ media }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),
  }
});
