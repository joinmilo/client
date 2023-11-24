import { Maybe } from 'src/app/core/api/generated/schema'
import { OfferSchema } from '../offer'
import { PersonSchema } from '../person'

export type DealEntitySchema = {
  '@context': string,
  '@type': string,
  description: Maybe<string>,
  name: Maybe<string>,
  offers: OfferSchema
  owns: PersonSchema,
  url: Maybe<string>,
}
