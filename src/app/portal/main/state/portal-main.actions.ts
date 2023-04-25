import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe, PageEntity } from 'src/schema/schema';

export const PortalMainActions = createActionGroup({
  source: 'Portal Main',
  events: {
    'get page': (slug?: Maybe<string>) => ({ slug }),
    'get landing page': emptyProps(),
    'set current page': (page: PageEntity) => ({ page }),
  }
});




