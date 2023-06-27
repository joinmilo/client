import { Params } from '@angular/router';
import { createActionGroup, emptyProps } from '@ngrx/store';
import { OrganisationFilterQueryParams } from 'src/app/core/typings/filter-params/organisation-filter-param';
import { Maybe } from 'src/schema/schema';

export const OrganisationFilterActions = createActionGroup({
  source: 'Organisation Filter',
  events: {
    'update all': (queryParams: Params) => ({ queryParams }),
    'all updated': (params: OrganisationFilterQueryParams) => ({ params }),
    'clear all': emptyProps(),

    'selected suburbs': (suburbIds?: Maybe<string[]>) => ({ suburbIds }),

    'selected active only': (value?: boolean) => ({ value }),
 
  }
});




