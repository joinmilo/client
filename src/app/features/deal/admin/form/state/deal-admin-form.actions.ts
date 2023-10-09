import { createActionGroup, emptyProps } from '@ngrx/store';
import { DealCategoryEntity, DealEntity, DealEntityInput, Maybe } from 'src/app/core/api/generated/schema';

export const DealAdminFormActions = createActionGroup({
  source: 'Deal Admin Form',
  events: {

    'get deal': (slug: Maybe<string>) => ({ slug }),
    'set deal': (deal: Maybe<DealEntity>) => ({ deal }),

    'get categories': emptyProps(),
    'set categories': (categories: Maybe<DealCategoryEntity[]>) => ({ categories }),

    'cancelled': emptyProps(),

    'save': (deal: DealEntityInput) => ({ deal }),
    'saved': emptyProps(),

  }
});
