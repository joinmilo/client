import { createActionGroup, emptyProps } from '@ngrx/store';
import { ArticleEntity } from 'src/schema/schema';

export const ArticlePageFeatureActions = createActionGroup({
  source: 'Article Page Feature',
  events: {
    'get recent articles': emptyProps(),
    'set recent articles': (articles?: ArticleEntity[]) => ({ articles }),
  }
});




