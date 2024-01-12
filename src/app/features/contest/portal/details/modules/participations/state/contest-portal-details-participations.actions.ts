import { createActionGroup } from '@ngrx/store';

import { ContestVoteEntity, ContestVoteEntityInput, FilterSortPaginateInput, Maybe, PageableList_ContestParticipationEntity } from 'src/app/core/api/generated/schema';


export const ContestPortalDetailsParticipationsActions = createActionGroup({
  source: 'Contest Portal Details Participations',
  events: {
    'set participations': (participations?: Maybe<PageableList_ContestParticipationEntity>) => ({ participations }),

    'update params': (params?: FilterSortPaginateInput) => ({ params }),

    'save vote': (entity: ContestVoteEntityInput, remainingVotes: Maybe<number>) => ({ entity, remainingVotes }),
    'vote saved': (entity: ContestVoteEntity) => ({ entity }),
  }
});
