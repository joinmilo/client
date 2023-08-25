import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { EventEntity } from 'src/schema/schema';

export const EventAdminDetailsVisitorsActions = createActionGroup({
  source: 'Event Admin Details',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (event: Maybe<EventEntity>) => ({ event }),
  }
});
