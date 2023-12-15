import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { Privilege } from 'src/app/core/typings/privilege';
import { SolidIconsType } from 'src/assets/fontawesome/solid-icons';

export type ColumnType = 'ADDRESS'
  | 'BOOLEAN'
  | 'CATEGORY'
  | 'COLOR'
  | 'DATE'
  | 'DATETIME'
  | 'ICON'
  | 'MEDIA'
  | 'TIME'
  | 'LIST';

export type Column<T> = {
  editable?: boolean,
  field: string,
  label?: string,
  sort?: boolean,
  type?: ColumnType,
  value?: ((row: T) => Observable<Maybe<string>> | Maybe<string>),
};

export type PageableList<T> = {
  result?: Maybe<Array<Maybe<T>>>;
  total?: number;
};

export type RowDefaultAction = 'LIKE' | 'SHARE';

export type RowCustomAction<T> = {
  callback?: (row: Maybe<T>) => void,
  disable?: (row: Maybe<T>) => boolean,
  icon: SolidIconsType,
  inlineEdit?: boolean,
  privileges?: Privilege[],
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