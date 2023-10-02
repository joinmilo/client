import { createActionGroup } from '@ngrx/store';
import { ArticleEntity, Maybe } from 'src/app/core/api/generated/schema';

export const ArticleAdminDetailsLandingActions = createActionGroup({
  source: 'Article Admin Details Landing',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (article: Maybe<ArticleEntity>) => ({ article }),
  }
});
