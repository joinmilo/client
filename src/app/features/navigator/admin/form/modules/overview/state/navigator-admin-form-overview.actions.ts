import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe, NavigatorPageEntity } from 'src/app/core/api/generated/schema';

export const NavigatorAdminFormOverviewActions = createActionGroup({
  source: 'Navigator Admin Form overview',
  events: {
    'get start page': emptyProps(),
    'set start page': (startPage: Maybe<NavigatorPageEntity>) => ({ startPage }),

    'get page': (slug: Maybe<string>) => ({ slug }),
    'set page': (page: Maybe<NavigatorPageEntity>) => ({ page }),
  }
});
