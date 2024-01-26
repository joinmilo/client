import { Maybe } from 'graphql/jsutils/Maybe';
import { PostalSchema } from '../properties/postal';
import { Schema } from './schema-entity';

export class UserContextEntitySchema extends Schema {

  constructor(
  public address: PostalSchema,
  public description: Maybe<string>,
  public email: Maybe<string>,
  public familyName: Maybe<string>,
  public givenName: Maybe<string>,
  public memberOf: Maybe<Maybe<string>[]>,
  public telephone: Maybe<string>,
  public url: Maybe<string>,
  ) {
    super('Person');
  }
}