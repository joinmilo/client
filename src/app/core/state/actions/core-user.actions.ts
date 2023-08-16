import { createActionGroup, emptyProps } from '@ngrx/store';
import { Cookie } from 'src/app/shared/widgets/cookie/typings/cookie';
import { UserContextEntity } from 'src/schema/schema';

export const CoreUserActions = createActionGroup({
  source: 'Core User',
  events: {
    'init': emptyProps(),
    'login': (email: string, password: string) => ({ email, password }),
    'logged in': emptyProps(),
    'update user': emptyProps(),
    'get me': (user: UserContextEntity) => ({ user }),
    'refresh expired': emptyProps(),
    'logout': emptyProps(),
    'require login': emptyProps(),
    'save cookie settings': (cookieSettings: Cookie) => ({cookieSettings}),
  },
});




