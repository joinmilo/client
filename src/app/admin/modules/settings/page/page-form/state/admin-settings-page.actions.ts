import { createActionGroup, emptyProps } from '@ngrx/store';

import { PageEntity, PageEntityInput } from 'src/app/core/api/generated/schema';


export const AdminSettingsPageActions = createActionGroup({
  source: 'Admin Settings Page Comments',
  events: {
    'save page': (entity: PageEntityInput) => ({ entity }),
    'page saved': (entity: PageEntity) => ({ entity }),

    'reset': emptyProps(),
  }
});
