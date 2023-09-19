import { createActionGroup, emptyProps } from '@ngrx/store';
import { DealCategoryEntity, FilterSortPaginateInput, Maybe, PageableList_DealCategoryEntity } from 'src/app/core/api/generated/schema';

export const DealAdminCategoryActions = createActionGroup({
  source: 'Deal Admin Category',
  events: {
    'set category data': (categories: PageableList_DealCategoryEntity) => ({ categories }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete category': (category?: Maybe<DealCategoryEntity>) => ({ category }),
    'category deleted': emptyProps()
  }
});
