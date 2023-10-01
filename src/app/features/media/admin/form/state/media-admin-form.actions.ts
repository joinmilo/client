import { createActionGroup, emptyProps } from '@ngrx/store';
import { InfoMediaCategoryEntity, InfoMediaEntityInput, Maybe } from 'src/app/core/api/generated/schema';

export const MediaAdminFormActions = createActionGroup({
  source: 'Media Admin Details Landing',
  events: {

    'get categories': emptyProps(),
    'set categories': (categories: Maybe<InfoMediaCategoryEntity[]>) => ({ categories }),

    'save': (media: InfoMediaEntityInput) => ({ media }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),
  }
});
