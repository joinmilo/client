import { createActionGroup, emptyProps } from '@ngrx/store';
import { AppEntity, ConfigurationEntity, InformationDto, LabelEntity, LanguageEntity, Maybe, SocialMediaEntity, ThemeEntity } from 'src/app/core/api/generated/schema';
import { Feedback } from '../../typings/feedback';

export const CoreActions = createActionGroup({
  source: 'Core',
  events: {
    'init': emptyProps(),
    'set apps': (apps: AppEntity[]) => ({ apps }),
    'set configurations': (configurations: ConfigurationEntity[]) => ({ configurations }),
    'set feedback': (feedback: Feedback) => ({ feedback }),
    'set labels': (labels: LabelEntity[]) => ({ labels }),
    'set languages': (languages: LanguageEntity[]) => ({ languages }),
    'set server info': (info?: Maybe<InformationDto>) => ({ info }),
    'set social media': (socialMedia: SocialMediaEntity[]) => ({ socialMedia }),
    'set themes': (themes: ThemeEntity[]) => ({ themes }),

    'add request': emptyProps(),
    'remove request': emptyProps(),

    'change language': (language: LanguageEntity) => ({ language }),
  },
});




