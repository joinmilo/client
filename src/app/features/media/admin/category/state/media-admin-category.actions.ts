import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, InfoMediaCategoryEntity, Maybe, PageableList_InfoMediaCategoryEntity } from 'src/app/core/api/generated/schema';

export const MediaAdminCategoryActions = createActionGroup({
  source: 'Media Admin Category',
  events: {
    'set category data': (categories: PageableList_InfoMediaCategoryEntity) => ({ categories }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete category': (category?: Maybe<InfoMediaCategoryEntity>) => ({ category }),
    'category deleted': emptyProps()
  }
});
