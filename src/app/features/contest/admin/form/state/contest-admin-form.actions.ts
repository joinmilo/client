import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ContestEntity, ContestEntityInput, ContestTypeEntity } from 'src/app/core/api/generated/schema';

export const ContestAdminFormActions = createActionGroup({
  source: 'Contest Admin Form',
  events: {
    'get contest': (slug: Maybe<string>) => ({ slug }),
    'contest retrieved': (contest: Maybe<ContestEntity>) => ({ contest }),

    'get types': emptyProps(),
    'set types': (types: Maybe<ContestTypeEntity[]>) => ({ types }),

    'save': (contest: ContestEntityInput) => ({ contest }),
    'saved': emptyProps(),

    'cancelled': emptyProps(),

  }
});
