import { createActionGroup } from '@ngrx/store';
import { Maybe, PageEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsPageDetailsLandingActions = createActionGroup({
  source: 'Page Admin Details Landing',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (page: Maybe<PageEntity>) => ({ page }),
  }
});
