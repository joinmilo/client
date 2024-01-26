import { Schema } from '../entities/schema-entity';
import { ListItemSchema } from './list-item';

export class BreadcrumbList extends Schema {

  constructor(
  public itemListElement: ListItemSchema[],
  ) {
    super('BreadcrumbList');
  }
}