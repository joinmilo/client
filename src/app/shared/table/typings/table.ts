import { Observable } from 'rxjs';
import { Maybe } from 'src/schema/schema';

export type ColumnType = 'BOOLEAN'
  | 'CATEGORY'
  | 'DATE'
  | 'DATETIME'
  | 'TIME';

export type Column<T> = {
  label?: string,
  field: string,
  type?: ColumnType | ((row: T) => Observable<Maybe<string> | undefined> | Maybe<string> | undefined),
};

export type RowActionType = 'EDIT'
  | 'DELETE'
  | 'DETAILS'
  | 'LIKE'
  | 'SHARE';

export type RowAction<T> = {
  callback?: (row: T) => void
  type?: RowActionType,
};