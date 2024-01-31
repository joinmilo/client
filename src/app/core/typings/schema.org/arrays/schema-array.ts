import { Maybe } from 'src/app/core/api/generated/schema';
import { Schema } from '../entities/schema-entity';

export class SchemaArray<T> extends Schema {

  constructor(
  public item?: Maybe<T[]>,
  ) {
    super('ListItem');
  }
}