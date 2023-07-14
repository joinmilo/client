import { createActionGroup } from '@ngrx/store';
import { ContestEntity, Maybe } from 'src/schema/schema';

export const PortalContestDetailsActions = createActionGroup({
  source: 'Portal Contest Details',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (contest: Maybe<ContestEntity>) => ({ contest }),
  }
});