import { createActionGroup, emptyProps } from '@ngrx/store';
import { Maybe } from 'graphql/jsutils/Maybe';
import { InfoMediaCategoryEntity, InfoMediaCategoryEntityInput } from 'src/app/core/api/generated/schema';

export const MediaAdminCategoryFormActions = createActionGroup({
  source: 'Media Admin Details Landing',
  events: {
    'save': (category: InfoMediaCategoryEntityInput) => ({ category }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),

    'get category': (entityId: string) => ({ entityId }),
    'category retrieved': (entity?: Maybe<InfoMediaCategoryEntity>) => ({ entity }),
  }
});
