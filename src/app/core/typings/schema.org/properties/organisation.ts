import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../entities/schema-entity';
import { PostalSchema } from './postal';

export class OrganisationSchema extends Schema {

  constructor(
    public name: Maybe<string>,
    public location: PostalSchema
  ) {
    super('Organization');
  }
}