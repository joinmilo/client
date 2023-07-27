import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe, PageEntity } from 'src/schema/schema';

export const PortalMainActions = createActionGroup({
  source: 'Portal Main',
  events: {
    'get page': (slug?: Maybe<string>) => ({ slug }),
    'set current page': (page: PageEntity) => ({ page }),
    'get landing page': emptyProps(),
    'set landing page': (page: PageEntity) => ({ page }),
  }
});




