import { createActionGroup } from '@ngrx/store';
import { Maybe, UserEntity, UserEntityInput } from 'src/schema/schema';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'verify': (token: Maybe<string>) => ({ token }),
    'verified': (verified: boolean | null | undefined) => ({ verified }),
    'send password reset': (email: Maybe<string> | undefined) => ({ email }),
    'reset password': (token: Maybe<string>, password: Maybe<string>) => ({ token, password }),
    'register': (entity: UserEntityInput) => ({ entity }),
    'registered': (entity: UserEntity) => ({ entity }),
  },
});




