import { ContactEntity, Maybe } from 'src/app/core/api/generated/schema';

export type ContactOptionEntity = {
  label?: Maybe<string>;
  contact?: Maybe<ContactEntity>;
}