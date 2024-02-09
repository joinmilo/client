import { Params } from '@angular/router';
import { createActionGroup, emptyProps } from '@ngrx/store';
import { Period } from 'ngx-cinlib/core';
import { ArticleCategoryEntity, Maybe } from 'src/app/core/api/generated/schema';
import { ArticleFilterQueryParams } from 'src/app/core/typings/filter-params/article-filter-param';

export const ArticleFilterActions = createActionGroup({
  source: 'Article Filter',
  events: {
    'init': emptyProps(),
    'query params initialized': (params: Params) => ({ params }),
    'browser navigated': (params: Params) => ({ params }),
    'all updated': (params: ArticleFilterQueryParams) => ({ params }),
    'clear all': emptyProps(),
    
    'get categories': emptyProps(),
    'set categories': (result: ArticleCategoryEntity[]) => ({ result }),
    'selected categories': (categoryIds?: Maybe<string[]>) => ({ categoryIds }),

    'selected period': (period?: Maybe<Period>) => ({ period }),
 
  }
});




