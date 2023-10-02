import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AddressEntity, Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { Category } from 'src/app/core/typings/category';
import { Translatable } from 'src/app/core/typings/translatable';

export type CardActionInput = {
  label: string,
  icon: IconProp,
}

export type CardActionOutput = {
  label: string,
  element: CardElement,
}

export enum CardType {
  Contact = 'contact',
  Content = 'content',
  Member = 'member',
  Sponsored = 'sponsored',
}

export type CardElement = {
  id?: Maybe<string>,

  address?: Maybe<AddressEntity>,

  category?: Maybe<Category>,

  creator?: Maybe<string>,
  creatorImage?: Maybe<MediaEntity>,
  email?: Maybe<string>,
  date?: Maybe<string>,
  dateTime: boolean,
  image?: Maybe<MediaEntity>,
  phone?: Maybe<string>,

  url?: Maybe<string | undefined>[],

  text?: Maybe<string>,
  textTranslatableField?: Maybe<string>,

  title?: Maybe<string>,
  titleTranslatableField?: Maybe<string>,

  translatables?: Maybe<Maybe<Translatable>[]>,

  avatarPlaceholder?: Maybe<string>
}

export type FlipCardOutput = {
  label: string,
  index: number,
}