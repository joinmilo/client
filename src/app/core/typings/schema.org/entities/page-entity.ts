import { Maybe } from 'src/app/core/api/generated/schema';
import { Schema } from '../schema-class';

export class PageEntitySchema extends Schema {

  constructor(
    // public hasParty: PageEmbeddingsEntitySchema[]
  public abstract: Maybe<string>,
  public dateCreated: Maybe<string>,
  public description: Maybe<string>,
  public lastReviewed: Maybe<string>,
  public mainContentOfPage: Maybe<string>,
  public name: Maybe<string>, 
  public significantLink: Maybe<string>,
  public url: Maybe<string>,
  ) {
    super('WebPage');
  }
}