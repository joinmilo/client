import { Maybe } from '../../../api/generated/schema'
import { AggregateRatingSchema } from '../properties/aggregate-rating'
import { OrganisationSchema } from '../properties/organisation'
import { PersonSchema } from '../properties/person'
import { PostalSchema } from '../properties/postal'
import { Schema } from './schema-entity'

export class EventEntitySchema extends Schema {

  constructor(
  public about: Maybe<string>,
  public aggregateRating: AggregateRatingSchema,
  public endDate: Maybe<string>,
  public startDate: Maybe<string>,
  public description: Maybe<string>,
  public location: PostalSchema,
  public maximumAttendeeCapacity: Maybe<number>,
  public name: Maybe<string>,
  public organizer: OrganisationSchema | PersonSchema,
  public url: Maybe<string>,
  ) {
    super('Event');
  }
}