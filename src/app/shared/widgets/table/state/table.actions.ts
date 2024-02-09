/* eslint-disable @typescript-eslint/no-explicit-any */
import { Params } from '@angular/router';
import { createActionGroup, emptyProps } from '@ngrx/store';
import { PageableList } from 'ngx-cinlib/core';
import { Maybe } from 'src/app/core/api/generated/schema';
import { ContentEntity } from 'src/app/core/typings/content-entity';
import { Column, RowAction, SortPaginate } from '../typings/table';

export const TableActions = createActionGroup({
  source: 'Table',
  events: {
    'init': emptyProps(),
    'query params initialized': (params: Params) => ({ params }),
    'browser navigated': (params: Params) => ({ params }),

    'set actions': (actions: RowAction<any>[]) => ({ actions }),
    'set clickable': (clickable: boolean) => ({ clickable }),
    'set columns': (columns: Column<any>[]) => ({ columns }),
    'set data': (data: Maybe<PageableList<any>>) => ({ data }),
    'set entity': (entity: ContentEntity) => ({ entity }),
    'set params': (params: SortPaginate) => ({ params }),
    'set query params': (queryParams: boolean) => ({ queryParams }),

    'row clicked': (row: any) => ({ row }),

    'row edit enabled': (row: any) => ({ row }),
    'row edit cancelled': emptyProps(),
    'edit row': (field: string, value: any) => ({ field, value }),
    'row edited': emptyProps(),

    'resetTable': emptyProps(),
  }
});
