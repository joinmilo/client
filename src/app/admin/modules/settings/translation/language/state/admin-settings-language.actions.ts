import { createActionGroup, emptyProps } from '@ngrx/store';
import { FilterSortPaginateInput, LanguageEntity, Maybe, PageableList_LanguageEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsLanguageActions = createActionGroup({
  source: 'Language Admin Overview',
  events: {

    'set overview data': (languages: PageableList_LanguageEntity) => ({ languages }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'delete language': (language?: Maybe<LanguageEntity>) => ({ language }),
    'language deleted': emptyProps(),
  }
});
