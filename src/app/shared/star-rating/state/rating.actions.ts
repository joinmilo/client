import { createActionGroup } from '@ngrx/store';
import { EventRatingEntity, EventRatingEntityInput } from 'src/schema/schema';

export const RatingActions = createActionGroup({
  source: 'Rating',
  events: {

    'save event rating': (entity: EventRatingEntityInput) => ({ entity }),
    'event rating saved': (entity: EventRatingEntity) => ({ entity }),
  }
});

