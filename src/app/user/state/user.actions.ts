import { createActionGroup } from '@ngrx/store';
import { Maybe, UserEntity, UserEntityInput } from 'src/schema/schema';

export const UserActions = createActionGroup({
  source: 'Portal User',
  events: {
    'verify user': (token: Maybe<string>) => ({ token }),
    'user verified': (verified: boolean | null | undefined) => ({ verified }),
    'send password reset': (email: Maybe<string> | undefined) => ({ email }),
    'reset password': (token: Maybe<string>, password: Maybe<string>) => ({ token, password }),
    'save user': (entity: UserEntityInput) => ({ entity }),
    'user saved': (entity: UserEntity) => ({ entity }),
    'user login': (email: Maybe<string> | undefined, password: Maybe<string>| undefined) => ({ email, password }),
    'user logged in': (token: Maybe<string>) => ({ token }),
  },
});




