import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { DealCategoryEntity, DealCategoryEntityInput } from 'src/app/core/api/generated/schema';

export const DealAdminCategoryFormActions = createActionGroup({
  source: 'Deal Admin Details Landing',
  events: {
    'save': (category: DealCategoryEntityInput) => ({ category }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),

    'get category': (entityId: string) => ({ entityId }),
    'category retrieved': (entity?: Maybe<DealCategoryEntity>) => ({ entity }),
  }
});
