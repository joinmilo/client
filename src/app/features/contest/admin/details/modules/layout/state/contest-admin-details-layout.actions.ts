import { createActionGroup } from '@ngrx/store';
import { ContestEntity, Maybe } from 'src/app/core/api/generated/schema';

export const ContestAdminDetailsLayoutActions = createActionGroup({
  source: 'Contest Admin Details Layout',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (contest: Maybe<ContestEntity>) => ({ contest }),
  }
});
