import { createActionGroup, emptyProps } from '@ngrx/store';
import { ContestEntity, FilterSortPaginateInput, Maybe } from 'src/schema/schema';

export const PortalContestOverviewActions = createActionGroup({
  source: 'Portal Contest Overview',
  events: {
    'get sponsored contest': emptyProps(),
    'set sponsored contest': (contest?: Maybe<ContestEntity>) => ({ contest }),

    'set active contests': (contests?: Maybe<ContestEntity[]>) => ({ contests }),
    'set completed contests': (contests?: Maybe<ContestEntity[]>) => ({ contests }),
    'set voteable contests': (contests?: Maybe<ContestEntity[]>) => ({ contests }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),
  }
});
