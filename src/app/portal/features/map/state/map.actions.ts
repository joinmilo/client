import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {
  DealCategoryEntity,
  EventCategoryEntity,
  EventEntity,
  EventTargetGroupEntity, FilterSortPaginateInput,
  SuburbEntity
} from 'src/schema/schema';

export const MapFeatureActions = createActionGroup({
  source: 'Map Feature',
  events: {
    'get filter options': emptyProps(),
    'set filter options': props<{
      dealCategories: DealCategoryEntity[],
      eventCategories: EventCategoryEntity[],
      targetGroups: EventTargetGroupEntity[],
      suburbs: SuburbEntity[],
    }>(),
    'set event filter': props<{
      categoryId?: string,
      targetGroupId?: string,
      // todo: further attributes
    }>(),
    'get events': props<{params: FilterSortPaginateInput}>(),
    'set events': props<{events: EventEntity[]}>()
  }
})
