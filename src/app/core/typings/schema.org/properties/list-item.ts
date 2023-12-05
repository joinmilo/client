import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../schema-class';
import { ItemSchema } from './item';

export class ListItemSchema extends Schema {

  constructor(
    public item: ItemSchema,
    public position: Maybe<number>,
  ) {
    super('ListItem');
  }
}