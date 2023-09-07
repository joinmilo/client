import { createActionGroup } from '@ngrx/store';
import { EventEntity, Maybe } from 'src/app/core/api/generated/schema';

export const EventAdminDetailsGoogleSearchActions = createActionGroup({
  source: 'Event Admin Details GoogleSearch',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (event: Maybe<EventEntity>) => ({ event }),
  }
});
