import { createActionGroup } from '@ngrx/store';

import { ContestVoteEntity, ContestVoteEntityInput, FilterSortPaginateInput, Maybe, PageableList_ContestParticipationEntity } from 'src/app/core/api/generated/schema';


export const ContestPortalDetailsVoteActions = createActionGroup({
  source: 'Contest Portal Details Vote',
  events: {
    'get participations':(slug: Maybe<string>) => ({ slug }),
    'set participations': (participations?: Maybe<PageableList_ContestParticipationEntity>) => ({ participations }),

    'update params': (params?: FilterSortPaginateInput) => ({ params }),

    'save vote': (entity: ContestVoteEntityInput) => ({ entity}),
    'vote saved': (entity: ContestVoteEntity) => ({ entity }),
  }
});
