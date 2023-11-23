import { Maybe } from '../../api/generated/schema';

export type PostalSchema = {
  '@context': string,
  '@type': string,
  postalCode?: Maybe<string>,
  streetAddress?: Maybe<string>,
  addressLocality?: Maybe<string>,
  addressRegion?: Maybe<string>,
}