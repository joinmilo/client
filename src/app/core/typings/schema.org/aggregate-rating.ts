import { Maybe } from '../../api/generated/schema'

export type AggregateRatingSchema = {
  '@context': string,
  '@type': string,
  ratingValue?: Maybe<number>,
  ratingCount?: Maybe<number>,
    
}