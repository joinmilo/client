import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, MediaEntity, PageableList_InfoMediaEntity } from 'src/app/core/api/generated/schema';

export const MediaAdminOverviewActions = createActionGroup({
  source: 'Media Admin Overview',
  events: {
    'set overview data': (media: PageableList_InfoMediaEntity) => ({ media }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete media': (media?: Maybe<MediaEntity>) => ({ media }),
    'media deleted': emptyProps(),
  }
});
