import { ListItemSchema } from './list-item';

export type BreadcrumbSchema = {
  '@context': string,
  '@type': string,
  itemListElement?: ListItemSchema,
  // itemListOrder?: Maybe<number>,
  // description?: Maybe<string>,
  // sameAs
}