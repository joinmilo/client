import { createActionGroup, emptyProps } from '@ngrx/store';

import { ContestEntity, ContestParticipationEntity, ContestParticipationEntityInput, Maybe } from 'src/app/core/api/generated/schema';


export const ContestPortalDetailsParticipationFormActions = createActionGroup({
  source: 'Contest Portal Details ParticipationForm',
  events: {
    'get details': (slug?: Maybe<string>) => ({ slug }),
    'set details': (contest: Maybe<ContestEntity>) => ({ contest }),

    'update details': emptyProps(),

    'save participation': (entity: ContestParticipationEntityInput) => ({ entity }),
    'participation saved': (entity: ContestParticipationEntity) => ({ entity }),

    'cancelled': emptyProps()
  }
});
