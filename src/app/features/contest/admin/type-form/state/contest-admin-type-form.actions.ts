import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ContestTypeEntity, ContestTypeEntityInput } from 'src/app/core/api/generated/schema';

export const ContestAdminTypeFormActions = createActionGroup({
  source: 'Contest Admin Details Landing',
  events: {
    'save': (category: ContestTypeEntityInput) => ({ category }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),

    'get category': (entityId: string) => ({ entityId }),
    'category retrieved': (entity?: Maybe<ContestTypeEntity>) => ({ entity }),
  }
});
