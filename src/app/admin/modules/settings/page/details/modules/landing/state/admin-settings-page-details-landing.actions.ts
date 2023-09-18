import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { PageEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsPageDetailsLandingActions = createActionGroup({
  source: 'Page Admin Details Landing',
  events: {
    'get details': (slug: Maybe<string>) => ({ slug }),
    'set details': (page: Maybe<PageEntity>) => ({ page }),
  }
});
