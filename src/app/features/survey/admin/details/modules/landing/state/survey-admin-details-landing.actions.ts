import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { SurveyEntity } from 'src/app/core/api/generated/schema';

export const SurveyAdminDetailsLandingActions = createActionGroup({
  source: 'Survey Admin Details Landing',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (event: Maybe<SurveyEntity>) => ({ event }),
  }
});
