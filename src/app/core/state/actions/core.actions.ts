import { createActionGroup, emptyProps } from '@ngrx/store';
import { Feedback } from 'ngx-cinlib/modals/feedback';
import { SidenavContent } from 'ngx-cinlib/modals/sidenav';
import { AppEntity, ConfigurationEntity, InformationDto, LanguageEntity, Maybe, SocialMediaEntity, ThemeEntity } from 'src/app/core/api/generated/schema';
import { Help } from '../../typings/help';

export const CoreActions = createActionGroup({
  source: 'Core',
  events: {
    'init': emptyProps(),
    'set apps': (apps: AppEntity[]) => ({ apps }),
    'set configurations': (configurations: ConfigurationEntity[]) => ({ configurations }),
    'set feedback': (feedback: Feedback) => ({ feedback }),
    'set languages': (languages: LanguageEntity[]) => ({ languages }),
    'set server info': (info?: Maybe<InformationDto>) => ({ info }),
    'set social media': (socialMedia: SocialMediaEntity[]) => ({ socialMedia }),
    'set themes': (themes: ThemeEntity[]) => ({ themes }),

    'set help': (help: Help) => ({ help }),
    'set sidenav component': (sidenav: SidenavContent) => ({ sidenav }),
    'remove sidenav component': emptyProps(),

    'change language': (language: LanguageEntity) => ({ language }),
  },
});
