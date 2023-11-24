import { Maybe } from '../../../api/generated/schema'
import { AggregateRatingSchema } from '../aggregate-rating'
import { CommentSchema } from '../comment'
import { OrganisationSchema } from '../organisation'
import { PersonSchema } from '../person'
import { PostalSchema } from '../postal'

export type EventEntitySchema = {
  '@context': string,
  '@type': string,
  about?: Maybe<string>,
  aggregateRating?: AggregateRatingSchema,
  comment?: CommentSchema,
  endDate?: Maybe<string>,
  startDate?: Maybe<string>,
  description?: Maybe<string>,
  location?: PostalSchema,
  maximumAttendeeCapacity: Maybe<number>,
  name?: Maybe<string>,
  organizer?: OrganisationSchema | PersonSchema,
  url?: Maybe<string>,
  // image

}