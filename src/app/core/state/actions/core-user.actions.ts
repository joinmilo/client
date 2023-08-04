import { createActionGroup, emptyProps } from '@ngrx/store';
import { UserContextEntity } from 'src/schema/schema';
import { ExternalContent } from '../../typings/external-content';

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
    'allow external content': (externalContent: ExternalContent) => ({externalContent})
  },
});




