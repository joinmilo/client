import { Maybe } from 'src/app/core/api/generated/schema';
import { PageEmbeddingsEntitySchema } from './page-embeddings-entity';
import { Schema } from './schema-entity';

export class PageEntitySchema extends Schema {

  constructor(
    public hasPart?: Maybe<PageEmbeddingsEntitySchema>[],
  ) {
    super('WebPage');
  }
}