import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { DealEntity } from 'src/app/core/api/generated/schema';

export const DealAdminDetailsLandingActions = createActionGroup({
  source: 'Deal Admin Details Landing',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (deal: Maybe<DealEntity>) => ({ deal }),
  }
});
