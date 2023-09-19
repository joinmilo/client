import { createActionGroup, emptyProps } from '@ngrx/store';
import { FeatureEntity, FilterSortPaginateInput, Maybe, PageableList_FeatureEntity } from 'src/app/core/api/generated/schema';

export const AdminSettingsFeatureActions = createActionGroup({
  source: 'Feature Admin Overview',
  events: {

    'set overview data': (features: PageableList_FeatureEntity) => ({ features }),

    'update params': (params: FilterSortPaginateInput) => ({ params }),

    'toggle Feature': (feature?: Maybe<FeatureEntity>) => ({ feature }),
    'feature toggled': emptyProps(),
  }
});
