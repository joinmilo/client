import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../schema-class';

export class PostalSchema extends Schema {

  constructor(
  public postalCode?: Maybe<string>,
  public streetAddress?: Maybe<string>,
  public addressLocality?: Maybe<string>,
  public addressRegion?: Maybe<string>,
  ) {
    super('PostalAddress');
  }
}