import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../entities/schema-entity';

export class OfferSchema extends Schema {

  constructor(
    public price: Maybe<number>,
  ) {
    super('Offer');
  }
}