import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventCategoryEntity, EventTargetGroupEntity, Maybe } from 'src/schema/schema';
import { OverviewFilterQueryParams } from '../typings/query-param';

export const FilterActions = createActionGroup({
  source: 'Filter',
  events: {
    'init': emptyProps(),
    'initialized': (params: OverviewFilterQueryParams) => ({ params }),
    'clear all': emptyProps(),

    'get target groups': emptyProps(),
    'set target groups': (result : EventTargetGroupEntity[]) => ({ result }),
    'selected target groups': (targetGroupIds?: Maybe<string[]>) => ({ targetGroupIds }),

    'get event categories': emptyProps(),
    'set event categories': (result: EventCategoryEntity[]) => ({ result }),
    'selected event categories': (categoryIds?: Maybe<string[]>) => ({ categoryIds }),
  }
});




