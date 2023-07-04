import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { Maybe } from 'src/schema/schema';

export type ColumnType = 'ADDRESS'
  | 'BOOLEAN'
  | 'CATEGORY'
  | 'DATE'
  | 'DATETIME'
  | 'TIME';

export type Column<T> = {
  label?: string,
  field: string,
  type?: ColumnType | ((row: T) => Observable<Maybe<string> | undefined> | Maybe<string> | undefined),
  sort?: boolean,
};

export type PageableList<T> = {
  result?: Maybe<Array<Maybe<T>>>;
  total?: number;
};

export type RowActionType = 'EDIT'
  | 'DELETE'
  | 'DETAILS'
  | 'LIKE'
  | 'SHARE';

export type RowAction<T> = {
  callback?: (row: T) => void,
  type?: RowActionType,
};

export type Sort = {
  dir?: Maybe<SortDirection>,
  sort?: Maybe<string>,
}

export type Paginate = {
  page?: Maybe<number>,
  size?: Maybe<number>,
}

export interface SortPaginate extends Sort, Paginate { }

export type SortOption = {
  field: string,
  label: string,
  dir?: SortDirection,
}