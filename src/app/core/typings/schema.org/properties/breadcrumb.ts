import { Schema } from '../schema-class';
import { ListItemSchema } from './list-item';

export class BreadcrumbList extends Schema {

  constructor(
  public itemListElement: ListItemSchema[],
  ) {
    super('BreadcrumbList');
  }
}