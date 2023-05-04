import { Maybe } from "graphql/jsutils/Maybe";
import { EventCommentTranslatableEntity, UserContextEntityInput } from "src/schema/schema";

export type CommentsElement = {
  created?: Maybe<string>;
  id?: Maybe<string>;
  modified?: Maybe<string>;
  translatables?: Maybe<Array<Maybe<EventCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntityInput>;
}