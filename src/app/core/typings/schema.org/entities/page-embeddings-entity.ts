import { Maybe } from 'src/app/core/api/generated/schema';
import { PageAttributeEntitySchema } from './page-attribute-entity';
import { Schema } from './schema-entity';

export class PageEmbeddingsEntitySchema extends Schema {

  constructor(
    public hasPart?: Maybe<PageAttributeEntitySchema[]>
  ) {
    super('CreativeWork');
  }
}