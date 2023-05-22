import { Maybe, UserContextEntityInput } from 'src/schema/schema';

export type Comment = {
  id?: Maybe<string>;
  created?: Maybe<string>;
  content?: Maybe<string>,
  userContext?: Maybe<UserContextEntityInput>;
}