import { Maybe } from 'src/app/core/api/generated/schema';
import { Schema } from '../schema-class';
import { PageEmbeddingsEntitySchema } from './page-embeddings-entity';

export class PageEntitySchema extends Schema {

  constructor(
    public hasPart?: Maybe<PageEmbeddingsEntitySchema>[],
  ) {
    super('WebPage');
  }
}