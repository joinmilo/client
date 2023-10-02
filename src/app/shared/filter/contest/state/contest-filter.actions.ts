import { Params } from '@angular/router';
import { createActionGroup, emptyProps } from '@ngrx/store';
import { ContestTypeEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ContestFilterQueryParams } from 'src/app/core/typings/filter-params/contest-filter-param';

export const ContestFilterActions = createActionGroup({
  source: 'Contest Filter',
  events: {
    'init': emptyProps(),
    'query params initialized': (params: Params) => ({ params }),
    'browser navigated': (params: Params) => ({ params }),
    'all updated': (params: ContestFilterQueryParams) => ({ params }),
    'clear all': emptyProps(),

    'get types': emptyProps(),
    'set types': (result: ContestTypeEntity[]) => ({ result }),
    'selected types': (typeIds?: Maybe<string[]>) => ({ typeIds }),
  }
});
