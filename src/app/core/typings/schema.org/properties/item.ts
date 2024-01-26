import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../entities/schema-entity';

export class ItemSchema extends Schema {

  constructor(
  public name: Maybe<string>,
  public description: Maybe<string>, 
  ) {
    super('Thing');
  }
}