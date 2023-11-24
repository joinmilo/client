import { Maybe } from '../../api/generated/schema';

export type OfferSchema = {
  '@context': string,
  '@type': string,
  price?: Maybe<number>,
}