import { Maybe } from '../../../api/generated/schema'
import { CategorySchema } from '../category'
import { CommentSchema } from '../comment'
import { OrganisationSchema } from '../organisation'
import { PersonSchema } from '../person'

export type ArticleSchema = {
  '@context': string,
  '@type': string,
  articleBody?: Maybe<string>,
  articleSection?: CategorySchema,
  // associatedMedia?: MediaSchema[], //problem with array
  author?: OrganisationSchema | PersonSchema,
  creator?: OrganisationSchema | PersonSchema,
  contentRating?: Maybe<number>,
  comment?: CommentSchema, 
  datePublished?: Maybe<string>,
  dateModified?: Maybe<string>,
  description: Maybe<string>,
  headline?: Maybe<string>,
  url?: Maybe<string>,
}