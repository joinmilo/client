import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ArticleEntity, ArticleEntityInput } from 'src/app/core/api/generated/schema';

export const ArticleAdminFormActions = createActionGroup({
  source: 'Article Admin Details Landing',
  events: {
    'get article': (slug: Maybe<string>) => ({ slug }),
    'set article': (article: Maybe<ArticleEntity>) => ({ article }),

    'save': (article: ArticleEntityInput) => ({ article }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),
  }
});
