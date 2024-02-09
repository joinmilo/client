import { Params } from '@angular/router';
import { createActionGroup, emptyProps } from '@ngrx/store';
import { Period } from 'ngx-cinlib/core';
import { EventCategoryEntity, EventTargetGroupEntity, Maybe } from 'src/app/core/api/generated/schema';
import { EventFilterQueryParams } from 'src/app/core/typings/filter-params/event-filter-param';

export const EventFilterActions = createActionGroup({
  source: 'Event Filter',
  events: {
    'init': emptyProps(),
    'query params initialized': (params: Params) => ({ params }),
    'browser navigated': (params: Params) => ({ params }),
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




