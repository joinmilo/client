import { Maybe } from '../../../api/generated/schema'
import { CommentSchema } from '../comment'
import { OrganisationSchema } from '../organisation'
import { PersonSchema } from '../person'

export type ArticleEntitySchema = {
  '@context': string,
  '@type': string,
  articleBody?: Maybe<string>,
  articleSection?: Maybe<string>,
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