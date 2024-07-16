import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventEntity, FilterSortPaginateInput, Maybe, PageableList_EventEntity } from 'src/app/core/api/generated/schema';



export const OrganisationAdminDetailsEventsActions = createActionGroup({
  source: 'Organisation Admin Details Events',
  events: {
    'set events': (events: PageableList_EventEntity) => ({ events }),
    'update params': (slug: Maybe<string> , params?: FilterSortPaginateInput) => ({ slug, params }),

    'delete event': (event?: Maybe<EventEntity>) => ({ event }),
    'event deleted': emptyProps(),
  }
});
