import { createActionGroup, emptyProps } from '@ngrx/store';
import { ArticleEntity, FilterSortPaginateInput, Maybe, PageableList_ArticleEntity } from 'src/app/core/api/generated/schema';

export const GuestArticleAdminOverviewActions = createActionGroup({
  source: 'GuestArticle Admin Overview',
  events: {
    'set overview data': (articles: PageableList_ArticleEntity) => ({ articles }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'toggle article approval': (article: Maybe<ArticleEntity>) => ({ article }),
    'approval changed': emptyProps(),

    'delete article': (article?: Maybe<ArticleEntity>) => ({ article }),
    'article deleted': emptyProps(),

    'sponsor article': (article?: Maybe<ArticleEntity>) => ({ article }),
    'article sponsored': emptyProps(),
  }
});
