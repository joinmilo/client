import { Maybe } from '../../api/generated/schema';

export type PersonSchema = {
  '@context': string,
  '@type': string,
  email?: Maybe<string>,
  familyName?: Maybe<string>,
  givenName?: Maybe<string>,
  telephone?: Maybe<string>,
}