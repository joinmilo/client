import { Maybe } from '../../api/generated/schema';

export type CategorySchema = {
  '@context': string,
  '@type': string,
  category?: Maybe<string>,
}