/* eslint-disable @typescript-eslint/no-explicit-any */
import { SortDirection } from '@angular/material/sort';
import { SolidIconsType } from 'ngx-cinlib/icons';
import { Observable } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { Privilege } from 'src/app/core/typings/privilege';

export type ColumnType = 'ADDRESS'
  | 'BOOLEAN'
  | 'CATEGORY'
  | 'COLOR'
  | 'DATETIME'
  | 'HTML'
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

export type RowCustomAction<T> = {
  callback?: (row: Maybe<T>) => void,
  disable?: (row: Maybe<T>) => boolean,
  icon: SolidIconsType,
  inlineEdit?: boolean,
  privileges?: Privilege[],
  tooltipLabel?: Maybe<string>,
};

export type RowActionComponentInput = {
  component: any,
  inputs?: {
    [key: string]: any;
  }
}

export type RowActionComponent<T> = (row: T) => RowActionComponentInput

export type RowAction<T> = RowCustomAction<T> | RowActionComponent<T>;

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