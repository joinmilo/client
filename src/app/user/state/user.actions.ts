import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'src/schema/schema';

export const UserActions = createActionGroup({
  source: 'Portal User',
  events: {
    'verify user': (token: Maybe<string>) => ({ token }),
    'user verified': (verified: boolean | null | undefined) => ({ verified }),
    'check password': (password: Maybe<string>) => ({ password }),
    'set entropy': (entropy: number | null | undefined) => ({entropy}),
    'send password reset': (email: Maybe<string> | undefined) => ({ email }),
    'reset password': (token: Maybe<string>, password: Maybe<string>) => ({ token, password }),
  },
});




