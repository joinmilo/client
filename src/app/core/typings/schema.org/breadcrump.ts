import { Maybe } from '../../api/generated/schema';

export type BreadcrumbSchema = {
  '@context': string,
  '@type': string,
  itemListElement?: Maybe<string>,
  itemListOrder?: Maybe<number>,
  description?: Maybe<string>,
  // sameAs
}