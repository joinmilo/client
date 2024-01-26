import { Maybe } from 'src/app/core/api/generated/schema'
import { AggregateRatingSchema } from '../properties/aggregate-rating'
import { PersonSchema } from '../properties/person'
import { PostalSchema } from '../properties/postal'
import { Schema } from './schema-entity'

export class OrganisationEntitySchema extends Schema {

  constructor(
    public aggregateRating: AggregateRatingSchema,
    public email: Maybe<string>,
    public legalName: Maybe<string>,
    public location: PostalSchema,
    public member: Maybe<Maybe<PersonSchema>[]>,
    public telephone: Maybe<string>,
    public description: Maybe<string>,
    public sameAs: Maybe<string>,
    public url: Maybe<string>,
  ) {
    super('Organization');
  }
}