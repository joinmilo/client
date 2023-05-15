import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {
  DealCategoryEntity, DealEntity,
  EventCategoryEntity,
  EventEntity,
  EventTargetGroupEntity, FilterSortPaginateInput,
  OrganisationEntity,
  SuburbEntity
} from 'src/schema/schema';
import {DealOfferStatus, FilterKey} from '../constants/map.constants';
import {CardData, CardEntity} from 'src/app/shared/card/typings/card';
import {PointOfInterest} from '../typings/point-of-interest';

export const MapFeatureActions = createActionGroup({
  source: 'Map Feature',
  events: {
    'set active filter': props<{key: FilterKey}>(),
    'get filter options': emptyProps(),
    'set filter options': props<{
      dealCategories: DealCategoryEntity[]
      eventCategories: EventCategoryEntity[]
      targetGroups: EventTargetGroupEntity[]
      suburbs: SuburbEntity[]
    }>(),

    'set event filter': props<{
      categoryId?: string
      targetGroupId?: string
      suburbId?: string
      dateRange?: {
        start: Date | null,
        end: Date | null,
      }
      showOnlyAdmissionFree?: boolean
      showPastEvents?: boolean
    }>(),
    'get events': props<{params: FilterSortPaginateInput}>(),
    'set events': props<{events: EventEntity[]}>(),

    'set organisation filter': props<{
      rating?: string
      suburbId?: string
    }>(),
    'get organisations': props<{params: FilterSortPaginateInput}>(),
    'set organisations': props<{organisations: OrganisationEntity[]}>(),

    'set deal filter': props<{
      categoryId?: string
      suburbId?: string,
      offerStatus?: DealOfferStatus
    }>(),
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
