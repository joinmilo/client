import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'src/schema/schema';

export const UserActions = createActionGroup({
  source: 'Portal User',
  events: {

    'verify user': (token: Maybe<string>) => ({ token }),
    'user verified': (verified: boolean | null | undefined) => ({ verified }),
  },
});




