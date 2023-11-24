import { Maybe } from 'src/app/core/api/generated/schema'
import { AggregateRatingSchema } from '../aggregate-rating'
import { PostalSchema } from '../postal'

export type OrganisationEntitySchema = {
  '@context': string,
  '@type': string,
  
  aggregateRating?: AggregateRatingSchema,
  email: Maybe<string>,
  // event: EventEntitySchema,
  legalName: Maybe<string>,
  location?: PostalSchema,
  // member: PersonSchema, //problem with array
  telephone: Maybe<string>,

  description: Maybe<string>,
  // image: 
  // logo:
  sameAs: Maybe<string>,
  url: Maybe<string>,
  
}