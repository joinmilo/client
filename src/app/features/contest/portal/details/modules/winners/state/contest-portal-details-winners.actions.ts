import { createActionGroup } from '@ngrx/store';

import { ContestParticipationEntity, Maybe } from 'src/app/core/api/generated/schema';


export const ContestPortalDetailsWinnersActions = createActionGroup({
  source: 'Contest Portal Details Winners',
  events: {
    'get winners': (slug?: Maybe<string>) => ({slug}),

    'set winners': (winners?: Maybe<ContestParticipationEntity[]>) => ({ winners }),
  }
});
