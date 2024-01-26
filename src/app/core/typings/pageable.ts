import { Maybe } from '../api/generated/schema';

export type PageableList<T> = {
  result?: Maybe<Array<Maybe<T>>>;
  total?: number;
};