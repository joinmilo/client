import { Maybe } from 'src/app/core/api/generated/schema';
import { Schema } from './schema-entity';

export class TranslatableEntitySchema extends Schema {

  constructor(
    public abstract: Maybe<string>,
  ) {
    super('CreativeWork');
  }
}