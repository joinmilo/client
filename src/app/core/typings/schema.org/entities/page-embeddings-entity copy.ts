import { Maybe } from 'graphql/jsutils/Maybe';
import { Schema } from '../schema-class';

export class PageEmbeddingsEntitySchema extends Schema {

  constructor(
  public position: Maybe<string>,
  ) {
    super('CreativeWork');
  }
}