import { Maybe } from '../../../api/generated/schema'
import { CommentSchema } from '../comment'
import { OrganisationSchema } from '../organisation'
import { PersonSchema } from '../person'
import { PostalSchema } from '../postal'

export type EventSchema = {
  '@context': string,
  '@type': string,
  organizer?: OrganisationSchema | PersonSchema,
  location?: PostalSchema,
  description?: Maybe<string>,
  name?: Maybe<string>,
  comment?: CommentSchema,
}