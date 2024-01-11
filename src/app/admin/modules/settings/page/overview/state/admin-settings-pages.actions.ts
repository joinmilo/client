import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, Maybe, PageEntity, PageableList_PageEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsPageActions = createActionGroup({
  source: 'Page Admin Overview',
  events: {
    'set overview data': (pages: PageableList_PageEntity) => ({ pages }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'assign landing': (pageId: Maybe<string>) => ({ pageId }),
    'landing assigned': emptyProps(),

    'delete page': (page?: Maybe<PageEntity>) => ({ page }),
    'page deleted': emptyProps(),
  }
});
