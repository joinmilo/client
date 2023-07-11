import { createActionGroup, emptyProps } from '@ngrx/store';
import { DealEntity, EventEntity, Maybe, OrganisationEntity } from 'src/schema/schema';

export const MapPageFeatureActions = createActionGroup({
  source: 'Map Page Feature',
  events: {
    'get sponsored deal': emptyProps(),
    'set sponsored deal': (deal?: Maybe<DealEntity>) => ({ deal }),
    
    'get sponsored event': emptyProps(),
    'set sponsored event': (event?: Maybe<EventEntity>) => ({ event }),

    'get sponsored organisation': emptyProps(),
    'set sponsored organisation': (organisation?: Maybe<OrganisationEntity>) => ({ organisation }),
  }
});




