import { createActionGroup, emptyProps } from '@ngrx/store';
import { ConfigurationEntity, InformationDto, LabelEntity, LanguageEntity, Maybe, NotificationEntity, ThemeEntity, UserContextEntity } from 'src/schema/schema';
import { Feedback } from '../typings/feedback';

export const CoreActions = createActionGroup({
  source: 'Core',
  events: {
    'init': emptyProps(),
    'set configurations': (configurations: ConfigurationEntity[]) => ({ configurations }),
    'set feedback': (feedback: Feedback) => ({ feedback }),
    'set labels': (labels: LabelEntity[]) => ({ labels }),
    'set languages': (languages: LanguageEntity[]) => ({ languages }),
    'set notifications': (notifications: NotificationEntity[]) => ({ notifications }),
    'set server version': (version?: Maybe<InformationDto>) => ({ version }),
    'set themes': (themes: ThemeEntity[]) => ({ themes }),

    'add request': emptyProps(),
    'remove request': emptyProps(),

    'change language': (language: LanguageEntity) => ({ language }),

    'login': (email: string, password: string) => ({ email, password }),
    'logged in': emptyProps(),
    'get me': (user: UserContextEntity) => ({ user }),
    'refresh expired': emptyProps(),
    'logout': emptyProps(),
  },
});




