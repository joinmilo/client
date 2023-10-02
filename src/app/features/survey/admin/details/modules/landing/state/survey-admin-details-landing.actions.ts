import { createActionGroup } from '@ngrx/store';
import { Maybe, SurveyEntity } from 'src/app/core/api/generated/schema';

export const SurveyAdminDetailsLandingActions = createActionGroup({
  source: 'Survey Admin Details Landing',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (event: Maybe<SurveyEntity>) => ({ event }),
  }
});
