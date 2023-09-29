import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ArticleCategoryEntity, ArticleCategoryEntityInput } from 'src/app/core/api/generated/schema';

export const ArticleAdminCategoryFormActions = createActionGroup({
  source: 'Article Admin Details Landing',
  events: {
    'save': (article: ArticleCategoryEntityInput) => ({ article }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),

    'get categories': emptyProps(),
    'set categories': (categories: Maybe<ArticleCategoryEntity[]>) => ({ categories })
  }
});
