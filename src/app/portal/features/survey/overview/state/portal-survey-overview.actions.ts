import { createActionGroup, emptyProps } from "@ngrx/store";
import { SurveyEntity } from "src/schema/schema";

export const PortalSurveyOverviewActions = createActionGroup({
  source: 'Portal Survey Overview',
  events: {
    'get surveys': emptyProps(),
    'set surveys': (surveys: SurveyEntity[]) => ({ surveys }),
  }
});