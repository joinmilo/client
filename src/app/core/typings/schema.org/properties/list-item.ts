import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../entities/schema-entity';
import { ItemSchema } from './item';

export class ListItemSchema extends Schema {

  constructor(
    public item: ItemSchema,
    public position: Maybe<number>,
  ) {
    super('ListItem');
  }
}