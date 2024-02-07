import { createActionGroup, emptyProps } from '@ngrx/store';
import { ContestParticipationEntity, FilterSortPaginateInput, Maybe, PageableList_ContestParticipationEntity } from 'src/app/core/api/generated/schema';


export const ContestAdminDetailsParticipationActions = createActionGroup({
  source: 'Contest Admin Details Participant',
  events: {
    'set participations': (participations: PageableList_ContestParticipationEntity) => ({ participations }),
    'update params': (slug: Maybe<string>, params?: FilterSortPaginateInput) => ({ slug, params }),

    'delete participation': (participation?: Maybe<ContestParticipationEntity>) => ({ participation }),
    'participation deleted': emptyProps(),

    'change placement': (participation: Maybe<ContestParticipationEntity>) => ({ participation }),
    'placement changed': emptyProps(),

    'change approved': (participation: Maybe<ContestParticipationEntity>) => ({ participation }),
    'approved changed': emptyProps()
  }
});
