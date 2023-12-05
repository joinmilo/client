import { Schema } from '../schema-class';

export class Array extends Schema {

  constructor(
  public item: Schema[],
  ) {
    super('ListItem');
  }
}