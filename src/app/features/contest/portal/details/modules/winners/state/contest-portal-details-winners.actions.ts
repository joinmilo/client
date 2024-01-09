import { createActionGroup, emptyProps } from '@ngrx/store';

import { ContestParticipationEntity, Maybe } from 'src/app/core/api/generated/schema';


export const ContestPortalDetailsWinnersActions = createActionGroup({
  source: 'Contest Portal Details Winners',
  events: {
    'set winners': (winners?: Maybe<ContestParticipationEntity[]>) => ({ winners }),

    'get winners': emptyProps()
  }
});
