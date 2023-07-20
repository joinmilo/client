import { createActionGroup } from '@ngrx/store';
import { ArticleEntity, DealEntity, EventEntity, FilterSortPaginateInput, Maybe, OrganisationEntity, UserContextEntity } from 'src/schema/schema';

export const PortalFavoritesActions = createActionGroup({
  source: 'Portal Favorites',
  events: {
    'get favorite articles': (params?: FilterSortPaginateInput) => ({ params }),
    'set favorite articles': (articles?: Maybe<ArticleEntity[]>) => ({ articles }),

    'get favorite authors': (params?: FilterSortPaginateInput) => ({ params }),
    'set favorite authors': (authors?: Maybe<UserContextEntity[]>) => ({ authors }),

    'get favorite deals': (params?: FilterSortPaginateInput) => ({ params }),
    'set favorite deals': (deals?: Maybe<DealEntity[]>) => ({ deals }),

    'get favorite events': (params?: FilterSortPaginateInput) => ({ params }),
    'set favorite events': (events?: Maybe<EventEntity[]>) => ({ events }),

    'get favorite organisations': (params?: FilterSortPaginateInput) => ({ params }),
    'set favorite organisations': (organisations?: Maybe<OrganisationEntity[]>) => ({ organisations }),
  }
});
