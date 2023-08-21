import { Maybe } from 'src/schema/schema';

export type Cookie = {
  externalContent?: Maybe<boolean>,
  statistics?: Maybe<boolean>,
  preferences?: Maybe<boolean>
};
