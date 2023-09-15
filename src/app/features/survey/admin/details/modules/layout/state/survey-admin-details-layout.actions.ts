import { createActionGroup } from '@ngrx/store';
import { Maybe, SurveyEntity } from 'src/app/core/api/generated/schema';

export const SurveyAdminDetailsLayoutActions = createActionGroup({
  source: 'Survey Admin Details Layout',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (survey: Maybe<SurveyEntity>) => ({ survey }),
  }
});
