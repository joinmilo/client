import { createActionGroup, emptyProps } from '@ngrx/store';
import { ArticleEntityInput } from 'src/app/core/api/generated/schema';

export const PortalGuestArticleActions = createActionGroup({
  source: 'Portal Guest Article',
  events: {
    
    'save': (guestArticle: ArticleEntityInput) => ({ guestArticle }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),
    
  }
});