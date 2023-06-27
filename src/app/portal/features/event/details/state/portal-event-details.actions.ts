import { createActionGroup } from '@ngrx/store';
import { EventCommentEntity, EventEntity, EventRatingEntity, EventRatingEntityInput, Maybe } from 'src/schema/schema';

export const PortalEventDetailsActions = createActionGroup({
  source: 'Portal Event Details',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (event: Maybe<EventEntity>) => ({ event }),

    'get comments': (slug: Maybe<string>) => ({ slug }),
    'set comments': (comments: Maybe<EventCommentEntity[]>) => ({ comments }),

    'save event rating': (entity: EventRatingEntityInput) => ({ entity }),
    'event rating saved': (entity: EventRatingEntity) => ({ entity }),
  }
});




