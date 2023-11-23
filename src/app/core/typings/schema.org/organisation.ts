import { Maybe } from '../../api/generated/schema'
import { PostalSchema } from './postal'

export type OrganisationSchema = {
  name?: Maybe<string>
  location?: PostalSchema
}