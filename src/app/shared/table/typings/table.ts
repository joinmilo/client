import { Maybe } from 'src/schema/schema';

export type ColumnType = 'BOOLEAN'
 | 'DATE'
 | 'DATETIME'
 | 'TIME'
 | 'TRANSLATABLE';

export type Column<T> = {
  label: string,
  field: string,
  type?: ColumnType | ((row: T) => Maybe<string> | undefined),
};