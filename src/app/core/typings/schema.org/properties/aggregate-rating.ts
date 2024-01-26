import { Maybe } from '../../../api/generated/schema';
import { Schema } from '../entities/schema-entity';

export class AggregateRatingSchema extends Schema {

  constructor(
  public ratingValue: Maybe<number>,
  public ratingCount: Maybe<number>,
  ) {
    super('AggregateRating');
  }
}