import { EventCommentTranslatableEntity, Maybe, UserContextEntityInput } from 'src/schema/schema';

export type Comment = {
  id?: Maybe<string>;
  created?: Maybe<string>;
  content?: Maybe<string>,
  translatables?: Maybe<Array<Maybe<EventCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntityInput>;
}