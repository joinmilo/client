import { SortDirection } from '@angular/material/sort';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Observable } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';

export type ColumnType = 'ADDRESS'
  | 'BOOLEAN'
  | 'CATEGORY'
  | 'DATE'
  | 'DATETIME'
  | 'TIME'
  | 'LIST';

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

export type RowDefaultAction = 'LIKE' | 'SHARE';

export type RowCustomAction<T> = {
  callback?: (row: Maybe<T>) => void,
  icon: IconName,
  tooltipLabel?: Maybe<string>,
};

export type RowAction<T> = RowCustomAction<T> | RowDefaultAction;

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