import { createActionGroup, emptyProps } from '@ngrx/store';

import { ContestParticipationEntity, ContestParticipationEntityInput } from 'src/app/core/api/generated/schema';


export const ContestPortalDetailsParticipationFormActions = createActionGroup({
  source: 'Contest Portal Details ParticipationForm',
  events: {
    'save participation': (entity: ContestParticipationEntityInput) => ({ entity }),
    'participation saved': (entity: ContestParticipationEntity) => ({ entity }),

    'cancelled': emptyProps()
  }
});
