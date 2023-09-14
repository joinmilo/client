import { createActionGroup } from '@ngrx/store';

import { EventEntity, Maybe } from 'src/app/core/api/generated/schema';
import { Period } from 'src/app/core/typings/period';


export const EventAdminDetailsVisitorsActions = createActionGroup({
  source: 'Event Admin Details Visitors',
  events: {
    'update Params': (slug: Maybe<string>, period: Period) => ({ slug, period }),
    'set details': (event: Maybe<EventEntity>) => ({ event }),
  }
});
