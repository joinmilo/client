import { createActionGroup, emptyProps } from '@ngrx/store';
import { ConfigurationEntity, InformationDto, LabelEntity, Maybe, ThemeEntity } from 'src/schema/schema';
import { Feedback } from '../typings/feedback';

export const CoreActions = createActionGroup({
  source: 'Core',
  events: {
    'init': emptyProps(),

    'set labels': (labels: LabelEntity[]) => ({ labels }),
    'save label': (entity: LabelEntity) => ({ entity }),
    'label saved': (entity: LabelEntity) => ({ entity }),

    'set feedback': (feedback: Feedback) => ({ feedback }),
    'set server version': (version?: Maybe<InformationDto>) => ({ version }),
    'set themes': (themes: ThemeEntity[]) => ({ themes }),

    'set configurations': (configurations: ConfigurationEntity[]) => ({ configurations })
  },
});




