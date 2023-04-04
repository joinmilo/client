import { createActionGroup, emptyProps } from '@ngrx/store';
import { ArticleCategoryEntity, ArticleEntity, ArticleEntityInput } from '../../../../../schema/schema';

export const GuestArticleActions = createActionGroup({
  source: 'Guest-Article',
  events: {
    'save article': (entity: ArticleEntityInput) => ({ entity }),
    'article saved': (entity: ArticleEntity) => ({ entity }),

    'get article categories': emptyProps(),
    'set article categories': (categories?: ArticleCategoryEntity[]) => ({ categories }),
  }
});