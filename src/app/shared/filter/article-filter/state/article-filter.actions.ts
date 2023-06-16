import { Params } from '@angular/router';
import { createActionGroup, emptyProps } from '@ngrx/store';
import { Period } from 'src/app/core/typings/period';
import { ArticleCategoryEntity, Maybe } from 'src/schema/schema';
import { ArticleFilterQueryParams } from '../../../../core/typings/filter-param';

export const ArticleFilterActions = createActionGroup({
  source: 'Article Filter',
  events: {
    'update all': (queryParams: Params) => ({ queryParams }),
    'all updated': (params: ArticleFilterQueryParams) => ({ params }),
    'clear all': emptyProps(),
    
    'get categories': emptyProps(),
    'set categories': (result: ArticleCategoryEntity[]) => ({ result }),
    'selected categories': (categoryIds?: Maybe<string[]>) => ({ categoryIds }),

    'selected period': (period?: Maybe<Period>) => ({ period }),
 
  }
});




