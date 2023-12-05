import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../schema-class';
import { PersonSchema } from './person';

export class CommentSchema extends Schema {

  constructor(
    public text: Maybe<string>,
    public creator: PersonSchema,
  ) {
    super('Comment');
  }
}