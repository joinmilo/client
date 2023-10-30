import { createActionGroup, emptyProps } from '@ngrx/store';

import { Maybe, PageEntity, PageEntityInput } from 'src/app/core/api/generated/schema';


export const AdminSettingsPageFormActions = createActionGroup({
  source: 'Admin Settings Create Page',
  events: {
    'get page': (slug: Maybe<string>) => ({ slug }),
    'set page': (page: Maybe<PageEntity>) => ({ page }),
    
    'save': (page: PageEntityInput) => ({ page }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),
  }
});
