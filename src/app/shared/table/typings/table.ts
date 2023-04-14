import { Observable } from 'rxjs';
import { Maybe } from 'src/schema/schema';

export type ColumnType = 'BOOLEAN'
  | 'CATEGORY'
  | 'DATE'
  | 'DATETIME'
  | 'TIME';

export type Column<T> = {
  label: string,
  field: string,
  type?: ColumnType | ((row: T) => Observable<Maybe<string>> | Maybe<string> | undefined),
};