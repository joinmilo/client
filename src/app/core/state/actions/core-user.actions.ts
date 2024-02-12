import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';
import { Cookie } from 'src/app/core/components/cookie/typings/cookie';
import { ContentEntity } from '../../typings/content-entity';

export const CoreUserActions = createActionGroup({
  source: 'Core User',
  events: {
    'init': emptyProps(),
    'login': (email: string, password: string) => ({ email, password }),
    'logged in': emptyProps(),
    'clear': emptyProps(),
    'require login': emptyProps(),

    'update user': emptyProps(),
    'get me': (user: UserContextEntity) => ({ user }),

    'save cookie settings': (cookieSettings: Cookie) => ({cookieSettings}),
    'allow external content': emptyProps(),

    'add favorite': (entity: Maybe<ContentEntity>, entityId: Maybe<string>) => ({ entity, entityId, }),
    'remove favorite': (entity: Maybe<ContentEntity>, entityId: Maybe<string>) => ({ entity, entityId, }),
  },
});




