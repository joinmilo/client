import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_SuburbEntity, SuburbEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsSuburbActions = createActionGroup({
  source: 'Suburb Admin Overview',
  events: {

    'set overview data': (suburbs: PageableList_SuburbEntity) => ({ suburbs }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete suburb': (suburb?: Maybe<SuburbEntity>) => ({ suburb }),
    'suburb deleted': emptyProps(),
  }
});
