import { Schema } from '../entities/schema-entity';

export class Array extends Schema {

  constructor(
  public item: Schema[],
  ) {
    super('ListItem');
  }
}