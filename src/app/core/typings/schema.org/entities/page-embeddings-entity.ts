import { Maybe } from 'src/app/core/api/generated/schema';
import { Schema } from '../schema-class';
import { PageAttributeEntitySchema } from './page-attribute-entity';

export class PageEmbeddingsEntitySchema extends Schema {

  constructor(
    public hasPart?: Maybe<PageAttributeEntitySchema[]>
  ) {
    super('CreativeWork');
  }
}