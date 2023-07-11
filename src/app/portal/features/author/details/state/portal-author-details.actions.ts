import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { UserContextEntity } from 'src/schema/schema';

export const PortalAuthorDetailsActions = createActionGroup({
  source: 'Author Details',
  events: {
    'get details': (slug?: Maybe<string>) => ({ slug }),
    'set details': (author: Maybe<UserContextEntity>) => ({ author }),
  }
});




