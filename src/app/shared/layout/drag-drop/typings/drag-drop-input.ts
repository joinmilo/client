import { Maybe } from 'src/app/core/api/generated/schema';

export interface DragDropInput<T> {
  element: T,
  label?: Maybe<string>,
  expanded?: boolean,
}

export interface DragDropElementInput<T> {
  element: T,
  edit: (element: T, index: number) => void,
  index: number,
}