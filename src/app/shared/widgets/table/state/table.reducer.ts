/* eslint-disable @typescript-eslint/no-explicit-any */
import { createReducer, on } from '@ngrx/store';
import { Maybe } from 'src/app/core/api/generated/schema';
import { ContentEntity } from 'src/app/core/typings/content-entity';
import { setFieldValue } from 'src/app/core/utils/reflection.utils';
import { Column, PageableList, RowAction, RowCustomAction, SortPaginate } from '../typings/table';
import { TableActions } from './table.actions';

export interface TableState<T> {
  actions?: RowAction<T>[],

  clickable?: boolean,
  clickedRow?: T,

  columns?: Column<T>[],
  data?: Maybe<PageableList<T>>,
  entity?: ContentEntity,
  params: SortPaginate,
  queryParams: boolean,

  inlineEditActive: boolean,
  inlineEditAction?: RowCustomAction<T>,
  inlineEditRow?: T,
}

export const initialState: TableState<any> = {
  inlineEditActive: false,
  params: {
    page: 0,
    size: 10,
  },
  queryParams: true,
};

export const tableReducer = createReducer(
  initialState,

  on(TableActions.editRow, (state, action): TableState<any> => (
    { ...state, inlineEditRow:
      setFieldValue(state.inlineEditRow, action.field, action.value)
    }
  )),

  on(TableActions.rowClicked, (state, action): TableState<any> => (
    { ...state, clickedRow: action.row }
  )),

  on(TableActions.setActions, (state, action): TableState<any> => {
    let inlineEditAction: Maybe<RowCustomAction<any>> = undefined;

    const newState = { ...state, actions:
      action.actions?.filter(action => {
        const isInlineEdit = typeof action !== 'string'
          && Object.hasOwn(action, 'inlineEdit')
          && !!(action as RowCustomAction<any>).inlineEdit
    
        if (isInlineEdit) {
          inlineEditAction = action as RowCustomAction<any>;
        }
    
        return !isInlineEdit;
      })
    }

    return inlineEditAction
      ? { ...newState, inlineEditAction: inlineEditAction }
      : newState;
  }),

  on(TableActions.setClickable, (state, action): TableState<any> => (
    { ...state, clickable: action.clickable }
  )),

  on(TableActions.setColumns, (state, action): TableState<any> => (
    { ...state, columns: action.columns }
  )),

  on(TableActions.setData, (state, action): TableState<any> => (
    { ...state, data: action.data }
  )),

  on(TableActions.setEntity, (state, action): TableState<any> => (
    { ...state, entity: action.entity }
  )),

  on(TableActions.setQueryParams, (state, action): TableState<any> => (
    { ...state, queryParams: action.queryParams }
  )),

  on(TableActions.rowEditEnabled, (state, action): TableState<any> => (
    { ...state,
      inlineEditActive: true,
      inlineEditRow: action.row
    }
  )),

  on(TableActions.rowEditCancelled, (state): TableState<any> => (
    { ...state, inlineEditActive: false }
  )),

  on(
    TableActions.setParams,
    TableActions.queryParamsInitialized,
    TableActions.browserNavigated,

    (state, action): TableState<any> => (
      { ...state,
        params: {
          dir: action.params.dir,
          page: action.params.page ?? state.params.page,
          size: action.params.size ?? state.params.size,
          sort: action.params.sort
        }
      }
    )
  ),

  on(TableActions.resetTable, (): TableState<any> => (
    {...initialState}
  )),
);
