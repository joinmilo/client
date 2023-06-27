import { Params } from '@angular/router';
import { createActionGroup, emptyProps } from '@ngrx/store';
import { SurveyFilterQueryParams } from 'src/app/core/typings/filter-params/survey-filter-param';

export const SurveyFilterActions = createActionGroup({
  source: 'Survey Filter',
  events: {
    'update all': (queryParams: Params) => ({ queryParams }),
    'all updated': (params: SurveyFilterQueryParams) => ({ params }),
    'clear all': emptyProps(),
    
    'selected past': (value?: boolean) => ({ value }),
 
  }
});




