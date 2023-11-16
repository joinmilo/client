import { createActionGroup, emptyProps } from '@ngrx/store';
import { InfoMediaCategoryEntity, InfoMediaEntity, InfoMediaEntityInput, Maybe } from 'src/app/core/api/generated/schema';

export const MediaAdminFormActions = createActionGroup({
  source: 'Media Admin Details Landing',
  events: {
    'get media': (id: Maybe<string>) => ({ id }),
    'set media': (media: Maybe<InfoMediaEntity>) => ({ media }),

    'save': (media: InfoMediaEntityInput) => ({ media }),
    'saved': emptyProps(),
    'cancelled': emptyProps(),
    
    'get categories': emptyProps(),
    'set categories': (categories: Maybe<InfoMediaCategoryEntity[]>) => ({ categories }),
  }
});
