import { createActionGroup } from '@ngrx/store';
import { DealEntity, Maybe } from 'src/app/core/api/generated/schema';

export const DealAdminDetailsLayoutActions = createActionGroup({
  source: 'Deal Admin Details Layout',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (deal: Maybe<DealEntity>) => ({ deal }),
  }
});
