import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../schema-class';
import { PostalSchema } from './postal';

export class OrganisationSchema extends Schema {

  constructor(
    public name: Maybe<string>,
    public location: PostalSchema
  ) {
    super('Organization');
  }
}