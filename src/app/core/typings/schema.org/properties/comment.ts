import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../entities/schema-entity';
import { PersonSchema } from './person';

export class CommentSchema extends Schema {

  constructor(
    public text: Maybe<string>,
    public creator: PersonSchema,
  ) {
    super('Comment');
  }
}