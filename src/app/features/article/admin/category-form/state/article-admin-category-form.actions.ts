import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ArticleCategoryEntity, ArticleCategoryEntityInput } from 'src/app/core/api/generated/schema';

export const ArticleAdminCategoryFormActions = createActionGroup({
  source: 'Article Admin Details Landing',
  events: {
    'save': (category: ArticleCategoryEntityInput) => ({ category }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),

    'get category': (entityId: string) => ({ entityId }),
    'category retrieved': (entity?: Maybe<ArticleCategoryEntity>) => ({ entity }),
  }
});
