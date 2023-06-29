import { createActionGroup, emptyProps } from '@ngrx/store';
import { ArticleEntity } from 'src/schema/schema';

export const GuestArticlePageFeatureActions = createActionGroup({
  source: 'Guest Article Page Feature',
  events: {
    'get recent guest articles': emptyProps(),
    'set recent guest articles': (articles?: ArticleEntity[]) => ({ articles }),
  }
});
