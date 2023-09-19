import { createActionGroup, emptyProps } from '@ngrx/store';
import { ArticleCategoryEntity, FilterSortPaginateInput, Maybe, PageableList_ArticleCategoryEntity } from 'src/app/core/api/generated/schema';

export const ArticleAdminCategoryActions = createActionGroup({
  source: 'Article Admin Category',
  events: {
    'set category data': (categories: PageableList_ArticleCategoryEntity) => ({ categories }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete category': (category?: Maybe<ArticleCategoryEntity>) => ({ category }),
    'category deleted': emptyProps()
  }
});
