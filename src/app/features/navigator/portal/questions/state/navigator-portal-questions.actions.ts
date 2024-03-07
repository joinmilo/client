import { createActionGroup, emptyProps } from '@ngrx/store';
import { RadioCardInput } from 'ngx-cinlib/forms/radio-card';
import { Maybe, NavigatorPageEntity } from 'src/app/core/api/generated/schema';

export const NavigatorPortalQuestionsActions = createActionGroup({
  source: 'Navigator Portal Questions',
  events: {
    'get start page': emptyProps(),
    'set start page': (startPage: Maybe<NavigatorPageEntity>) => ({ startPage }),

    'get page': (slug: Maybe<string>) => ({ slug }),
    'set page': (page: Maybe<NavigatorPageEntity>) => ({ page }),

    'set navigator state': (inputs: RadioCardInput[], currentIndex: number) => ({ inputs, currentIndex })
  }
});
