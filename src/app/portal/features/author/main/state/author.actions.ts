import { createActionGroup } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { UserContextEntity } from 'src/schema/schema';

export const AuthorActions = createActionGroup({
  source: 'Author',
  events: {
    'get author details': (slug: string) => ({ slug }),
    'set author details': (author: Maybe<UserContextEntity>) => ({ author }),
  }
});




