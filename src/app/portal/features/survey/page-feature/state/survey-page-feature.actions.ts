import { createActionGroup, emptyProps } from '@ngrx/store';
import { SurveyEntity } from 'src/schema/schema';

export const SurveyPageFeatureActions = createActionGroup({
  source: 'Survey Page Feature',
  events: {
    'get recent surveys': emptyProps(),
    'set recent surveys': (surveys?: SurveyEntity[]) => ({ surveys }),
  }
});




