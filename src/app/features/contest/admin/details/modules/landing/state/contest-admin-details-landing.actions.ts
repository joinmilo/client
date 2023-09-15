import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ContestEntity } from 'src/app/core/api/generated/schema';

export const ContestAdminDetailsLandingActions = createActionGroup({
  source: 'Contest Admin Details Landing',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (contest: Maybe<ContestEntity>) => ({ contest }),
  }
});
