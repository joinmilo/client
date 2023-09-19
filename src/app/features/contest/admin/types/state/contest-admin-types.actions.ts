import { createActionGroup, emptyProps } from '@ngrx/store';
import { ContestTypeEntity, FilterSortPaginateInput, Maybe, PageableList_ContestTypeEntity } from 'src/app/core/api/generated/schema';

export const ContestAdminTypesActions = createActionGroup({
  source: 'Contest Admin Types',
  events: {
    'set types data': (contests: PageableList_ContestTypeEntity) => ({ contests }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete type': (contestType?: Maybe<ContestTypeEntity>) => ({ contestType }),
    'type deleted': emptyProps(),
  }
});
