import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe, UserContextEntity } from 'src/app/core/api/generated/schema';

export const PortalAuthorDetailsActions = createActionGroup({
  source: 'Author Details',
  events: {
    'get details': (slug?: Maybe<string>) => ({ slug }),
    'set details': (author: Maybe<UserContextEntity>) => ({ author }),

    'reset': emptyProps(),
  }
});




