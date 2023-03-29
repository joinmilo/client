import { Maybe } from 'graphql/jsutils/Maybe';
import { AddressEntity, ContactEntity, MediaEntity } from 'src/schema/schema';
import { Translatable } from './translatable';


export type CardInput = {
  address?: Maybe<AddressEntity>,

  // Either 
  category?: Maybe<string>,
  categoryTranslatables?: Maybe<Translatable[]>,
  categoryTranslatableField?: Maybe<string>,

  creator?: Maybe<string>,
  creatorImage?: Maybe<MediaEntity>,
  email?: Maybe<ContactEntity>,
  date?: Maybe<string>,
  dateTime: boolean,
  image?: Maybe<MediaEntity>,

  text?: Maybe<string>,
  textTranslatableField?: Maybe<string>,

  title?: Maybe<string>,
  titleTranslatableField?: Maybe<string>,

  translatables?: Maybe<Translatable[]>,
}