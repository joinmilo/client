import { Maybe } from '../../api/generated/schema';

export type ItemSchema = {
  '@context': string,
  '@type': string,
  name?: Maybe<string>,
}