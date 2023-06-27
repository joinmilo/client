import { createActionGroup, props } from '@ngrx/store';
import { FilterKey } from 'src/app/core/typings/filter-params/map-filter-param';
import { CardData, CardEntity } from 'src/app/shared/card/typings/card';
import { DealEntity, EventEntity, FilterSortPaginateInput, OrganisationEntity, } from 'src/schema/schema';
import { PointOfInterest } from '../typings/point-of-interest';

export const MapFeatureActions = createActionGroup({
  source: 'Map Feature',
  events: {
    'set active filter': props<{key: FilterKey}>(),
    'set filter params': props<{params: FilterSortPaginateInput}>(),

    'get events': props<{params: FilterSortPaginateInput}>(),
    'set events': props<{events: EventEntity[]}>(),

    'get organisations': props<{params: FilterSortPaginateInput}>(),
    'set organisations': props<{organisations: OrganisationEntity[]}>(),

    'get deals': props<{params: FilterSortPaginateInput}>(),
    'set deals': props<{deals: DealEntity[]}>(),

    'set results': props<{
      count: number,
      label: string,
      labelPlural: string,
      entity: CardEntity,
      data: CardData[]
    }>(),

    'set pois': props<{pois: PointOfInterest[]}>(),
  }
})
