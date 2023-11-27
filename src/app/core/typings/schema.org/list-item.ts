import { Maybe } from '../../api/generated/schema';

export type ListItemSchema = {
  '@context': string,
  '@type': string,
  item?: Maybe<string>
  // nextItem?: Maybe<string>,  //subMenuItem
  position?: Maybe<number>,
  // previousItem?: Maybe<string>, //parent
  // sameAs
}