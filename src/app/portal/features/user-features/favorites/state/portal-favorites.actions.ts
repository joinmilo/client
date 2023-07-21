import { createActionGroup } from '@ngrx/store';
import { FilterSortPaginateInput, PageableList_ArticleEntity, PageableList_DealEntity, PageableList_EventEntity, PageableList_OrganisationEntity, PageableList_UserContextEntity } from 'src/schema/schema';

export const PortalFavoritesActions = createActionGroup({
  source: 'Portal Favorites',
  events: {
    'get favorite articles': (params?: FilterSortPaginateInput) => ({ params }),
    'set favorite articles': (articles: PageableList_ArticleEntity) => ({ articles }),

    'get favorite authors': (params?: FilterSortPaginateInput) => ({ params }),
    'set favorite authors': (authors: PageableList_UserContextEntity) => ({ authors }),

    'get favorite deals': (params?: FilterSortPaginateInput) => ({ params }),
    'set favorite deals': (deals: PageableList_DealEntity) => ({ deals }),

    'get favorite events': (params?: FilterSortPaginateInput) => ({ params }),
    'set favorite events': (events: PageableList_EventEntity) => ({ events }),

    'get favorite organisations': (params?: FilterSortPaginateInput) => ({ params }),
    'set favorite organisations': (organisations: PageableList_OrganisationEntity) => ({ organisations }),
  }
});
