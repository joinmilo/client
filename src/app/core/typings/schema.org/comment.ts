import { Maybe } from '../../api/generated/schema';
import { PersonSchema } from './person';

export type CommentSchema = {
  '@context': string,
  '@type': string,
    text: Maybe<string>,
    // commentTime: Maybe<string>, 
    creator: PersonSchema,

}