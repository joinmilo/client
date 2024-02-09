import { Maybe } from '../../../api/generated/schema';

import { OrganisationSchema } from '../properties/organisation';
import { PersonSchema } from '../properties/person';
import { Schema } from './schema-entity';

export class ContestEntitySchema extends Schema {

  constructor(
    public description: Maybe<string>,
    public organizer: OrganisationSchema | PersonSchema,
    public about: Maybe<string>,
    public endDate: Maybe<string>,
    public startDate: Maybe<string>,
    public performer: Maybe<Maybe<PersonSchema>[]>,
  ) {
    super('Event');
  }
}