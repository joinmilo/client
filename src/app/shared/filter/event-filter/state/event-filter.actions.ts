import { Params } from '@angular/router';
import { createActionGroup, emptyProps } from '@ngrx/store';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';
import { Period } from 'src/app/core/typings/period';
import { EventCategoryEntity, EventTargetGroupEntity, Maybe } from 'src/schema/schema';

export const EventFilterActions = createActionGroup({
  source: 'Event Filter',
  events: {
    'update all': (queryParams: Params) => ({ queryParams }),
    'all updated': (params: EventFilterQueryParams) => ({ params }),
    'clear all': emptyProps(),
    
    'get categories': emptyProps(),
    'set categories': (result: EventCategoryEntity[]) => ({ result }),
    'selected categories': (categoryIds?: Maybe<string[]>) => ({ categoryIds }),

    'selected suburbs': (suburbIds?: Maybe<string[]>) => ({ suburbIds }),
    
    'get target groups': emptyProps(),
    'set target groups': (result : EventTargetGroupEntity[]) => ({ result }),
    'selected target groups': (targetGroupIds?: Maybe<string[]>) => ({ targetGroupIds }),

    'selected period': (period?: Maybe<Period>) => ({ period }),
    'selected free only': (value?: boolean) => ({ value }),
    'selected past': (value?: boolean) => ({ value }),
 
  }
});




