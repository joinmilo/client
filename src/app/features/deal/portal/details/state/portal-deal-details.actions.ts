import { createActionGroup } from '@ngrx/store';
import { DealEntity, Maybe } from 'src/app/core/api/generated/schema';

export const PortalDealDetailsActions = createActionGroup({
  source: 'Portal Deal Details',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (deal: Maybe<DealEntity>) => ({ deal }),
  }
});