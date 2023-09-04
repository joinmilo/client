import { createActionGroup, emptyProps } from '@ngrx/store';
import { ContestEntity, FilterSortPaginateInput, Maybe, PageableList_ContestEntity } from 'src/app/core/api/generated/schema';

export const ContestAdminOverviewActions = createActionGroup({
  source: 'Contest Admin Overview',
  events: {

    'set overview data': (contests: PageableList_ContestEntity) => ({ contests }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'sponsor contest': (contest?: Maybe<ContestEntity>) => ({ contest }),
    'contest sponsored': emptyProps(),

    'delete contest': (contest?: Maybe<ContestEntity>) => ({ contest }),
    'contest deleted': emptyProps(),
  }
});
