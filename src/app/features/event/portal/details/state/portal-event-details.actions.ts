import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventAttendeeEntity, EventCommentEntity, EventCommentEntityInput, EventEntity, EventRatingEntity, EventRatingEntityInput, EventScheduleEntity, Maybe } from 'src/schema/schema';

export const PortalEventDetailsActions = createActionGroup({
  source: 'Portal Event Details',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (event: Maybe<EventEntity>) => ({ event }),
    'update details': (event: Maybe<EventEntity>) => ({ event }),
    'details updated': (event: Maybe<EventEntity>) => ({ event }),

    'get comments': (slug: Maybe<string>) => ({ slug }),
    'set comments': (comments: Maybe<EventCommentEntity[]>) => ({ comments }),

    'save comment': (entity: EventCommentEntityInput) => ({ entity }),
    'comment saved': (entity: EventCommentEntity) => ({ entity }),

    'get schedules': (event_id: Maybe<string> | undefined, startDate: Maybe<string>, endDate: Maybe<string>) => ({event_id, startDate, endDate }),
    'set schedules': (schedules: Maybe<EventScheduleEntity[]>) => ({schedules}),

    'save rating': (entity: EventRatingEntityInput) => ({ entity }),
    'rating saved': (entity: EventRatingEntity) => ({ entity }),

    'attend event': emptyProps(),
    'attendee saved': (entity: Maybe<EventAttendeeEntity> | undefined) => ({ entity }),

    'cancel attendee registration': emptyProps(),
    'attendee deleted': (deleted?: Maybe<boolean> ) => ({ deleted }),
  }
});