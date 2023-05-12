import { createActionGroup, emptyProps } from '@ngrx/store';
import { UserContextEntity } from 'src/schema/schema';

export const PortalAuthorOverviewActions = createActionGroup({
  source: 'Authors Overview',
  events: {
    'get recent authors': emptyProps(),
    'set recent authors': (authors: UserContextEntity[]) => ({ authors }),
  }
});




