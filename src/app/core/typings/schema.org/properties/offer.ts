import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../schema-class';

export class OfferSchema extends Schema {

  constructor(
    public price: Maybe<number>,
  ) {
    super('Offer');
  }
}