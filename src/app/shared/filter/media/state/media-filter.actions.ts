import { Params } from '@angular/router';
import { createActionGroup, emptyProps } from '@ngrx/store';
import { InfoMediaCategoryEntity, Maybe } from 'src/app/core/api/generated/schema';
import { MediaFilterQueryParams } from 'src/app/core/typings/filter-params/media-filter-param';

export const MediaFilterActions = createActionGroup({
  source: 'Media Filter',
  events: {
    'init': emptyProps(),
    'query params initialized': (params: Params) => ({ params }),
    'browser navigated': (params: Params) => ({ params }),
    'all updated': (params: MediaFilterQueryParams) => ({ params }),
    'clear all': emptyProps(),

    'get categories': emptyProps(),
    'set categories': (result: InfoMediaCategoryEntity[]) => ({ result }),
    'selected categories': (categoryIds?: Maybe<string[]>) => ({ categoryIds }),

    'selected media types': (mimeTypes?: Maybe<string[]>) => ({ mimeTypes })

  }
});




