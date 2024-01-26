import { Maybe } from 'src/app/core/api/generated/schema';
import { OfferSchema } from '../properties/offer';
import { Schema } from './schema-entity';
export class DealEntitySchema extends Schema {

  constructor(
    public category: Maybe<string>,
    public description: Maybe<string>,
    public name: Maybe<string>,
    public offers: Maybe<OfferSchema>,
    public url: Maybe<string>
  ) {
    super('Product');
  }
}