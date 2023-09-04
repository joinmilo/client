import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageableList_SurveyEntity, SurveyEntity } from 'src/app/core/api/generated/schema';

export const SurveyAdminOverviewActions = createActionGroup({
  source: 'Survey Admin Overview',
  events: {

    'set overview data': (surveys: PageableList_SurveyEntity) => ({ surveys }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete survey': (survey?: Maybe<SurveyEntity>) => ({ survey }),
    'survey deleted': emptyProps(),

    'sponsor survey': (survey?: Maybe<SurveyEntity>) => ({ survey }),
    'survey sponsored': emptyProps(),
  }
});
