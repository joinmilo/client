import { createActionGroup } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_SurveyEntity } from 'src/schema/schema';

export const SurveyAdminOverviewActions = createActionGroup({
  source: 'Survey Admin Overview',
  events: {

    'set overview data': (surveys: PageableList_SurveyEntity) => ({ surveys }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),
  }
});
