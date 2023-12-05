import { Maybe } from '../../../api/generated/schema'
import { CommentSchema } from '../properties/comment'
import { OrganisationSchema } from '../properties/organisation'
import { PersonSchema } from '../properties/person'
import { Schema } from '../schema-class'

export class ArticleEntitySchema extends Schema {

  constructor(
    public articleBody: Maybe<string>,
    public articleSection: Maybe<string>,
    public author: OrganisationSchema | PersonSchema,
    public creator: OrganisationSchema | PersonSchema,
    public contentRating: Maybe<number>,
    public comment: CommentSchema, 
    public datePublished: Maybe<string>,
    public dateModified: Maybe<string>,
    public description: Maybe<string>,
    public headline: Maybe<string>,
    public url: Maybe<string>,
  ) {
    super('Article');
  }
}