import { createActionGroup, emptyProps } from '@ngrx/store';
import { ArticlePublicAuthorEntity, FilterSortPaginateInput, Maybe, PageableList_ArticlePublicAuthorEntity } from 'src/app/core/api/generated/schema';

export const GuestArticleAdminPublicAuthorsActions = createActionGroup({
  source: 'GuestArticle Admin PublicAuthors',
  events: {
    'set overview data': (publicAuthors: PageableList_ArticlePublicAuthorEntity) => ({ publicAuthors }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete Author': (article?: Maybe<ArticlePublicAuthorEntity>) => ({ article }),
    'Author deleted': emptyProps(),
  }
});
