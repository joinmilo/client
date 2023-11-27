import { Maybe } from 'src/app/core/api/generated/schema'
import { OfferSchema } from '../offer'

export type DealEntitySchema = {
  '@context': string,
  '@type': string,
  category: Maybe<string>,
  description: Maybe<string>,
  name: Maybe<string>,
  offers: OfferSchema
  // owns: PersonSchema,
  url: Maybe<string>,
}
