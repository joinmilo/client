import { Maybe } from 'graphql/jsutils/Maybe'
import { PostalSchema } from '../postal'

export type UserContextEntitySchema = {
  '@context': string,
  '@type': string,
  address: PostalSchema,
  description: Maybe<string>,
  email: Maybe<string>,
  familyName: Maybe<string>,
  givenName: Maybe<string>,
  // memberOf: OrganisationSchema,
  telephone: Maybe<string>,
  // image:
  url: Maybe<string>,
}