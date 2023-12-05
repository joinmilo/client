import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../schema-class';

export class PersonSchema extends Schema {

  constructor(
  public email?: Maybe<string>,
  public familyName?: Maybe<string>,
  public givenName?: Maybe<string>,
  public telephone?: Maybe<string>,
  ) {
    super('Person');
  }
}