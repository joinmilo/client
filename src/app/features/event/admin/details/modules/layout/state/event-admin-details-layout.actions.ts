import { createActionGroup } from '@ngrx/store';
import { EventEntity, Maybe } from 'src/app/core/api/generated/schema';

export const EventAdminDetailsLayoutActions = createActionGroup({
  source: 'Event Admin Details Layout',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (event: Maybe<EventEntity>) => ({ event }),
  }
});
