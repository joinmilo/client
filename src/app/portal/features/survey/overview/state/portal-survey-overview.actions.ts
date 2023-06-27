import { createActionGroup, emptyProps } from "@ngrx/store";
import { FilterSortPaginateInput, Maybe, PageableList_SurveyEntity, SurveyEntity } from "src/schema/schema";

export const PortalSurveyOverviewActions = createActionGroup({
  source: 'Portal Survey Overview',
  events: {
    'get sponsored Survey': emptyProps(),
    'set sponsored Survey': (survey?: Maybe<SurveyEntity>) => ({ survey }),

    'get overview data': emptyProps(),
    'set overview data': (surveys?: Maybe<PageableList_SurveyEntity>) => ({ surveys }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),
  }
});