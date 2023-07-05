import { createActionGroup, emptyProps } from '@ngrx/store';
import { AttendeeEntity, EventCommentEntity, EventCommentEntityInput, EventEntity, EventRatingEntity, EventRatingEntityInput, Maybe, ScheduleEntity } from 'src/schema/schema';

export const PortalEventDetailsActions = createActionGroup({
  source: 'Portal Event Details',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (event: Maybe<EventEntity>) => ({ event }),
    'update details': (event: Maybe<EventEntity>) => ({ event }),
    'details updated': (event: Maybe<EventEntity>) => ({ event }),

    'get comments': (slug: Maybe<string>) => ({ slug }),
    'set comments': (comments: Maybe<EventCommentEntity[]>) => ({ comments }),

    'save event rating': (entity: EventRatingEntityInput) => ({ entity }),
    'event rating saved': (entity: EventRatingEntity) => ({ entity }),

    'get schedules': (startDate: Maybe<string>, endDate: Maybe<string>) => ({startDate, endDate}),
    'set schedules': (schedules: Maybe<ScheduleEntity[]>) => ({schedules}),

    'attend event': emptyProps(),
    'attendee saved': (entity: Maybe<AttendeeEntity> | undefined) => ({ entity }),

    'cancel attendee registration': emptyProps(),
    'attendee deleted': (deleted?: Maybe<boolean> ) => ({ deleted }),

    'save event comment': (entity: EventCommentEntityInput) => ({ entity }),
    'event comment saved': (entity: EventCommentEntity) => ({ entity }),
  }
});