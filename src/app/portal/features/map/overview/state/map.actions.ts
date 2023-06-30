import { createActionGroup, props } from '@ngrx/store';
import { MapEntityFilter } from 'src/app/core/typings/filter-params/map-filter-param';
import { DealEntity, EventEntity, FilterSortPaginateInput, OrganisationEntity, } from 'src/schema/schema';

export const MapFeatureActions = createActionGroup({
  source: 'Map Feature',
  events: {
    'set entity filter': (entity: MapEntityFilter) => ({ entity }),
    'set filter params': (params: FilterSortPaginateInput) => ({ params }),

    'set events': props<{events: EventEntity[]}>(),
    'set organisations': props<{organisations: OrganisationEntity[]}>(),
    'set deals': props<{deals: DealEntity[]}>(),
  }
})
