import { Translatable } from 'src/app/core/typings/translatable';
import { AddressEntity, ArticleEntity, ContestEntity, DealEntity, EventEntity, Maybe, MediaEntity, OrganisationEntity, SurveyEntity, UserContextEntity } from 'src/schema/schema';

export enum CardType {
  Contact = 'contact',
  Content = 'content',
  Sponsored = 'sponsored',
}

export type CardEntity = 'ArticleEntity'
  | 'ContestEntity'
  | 'DealEntity'
  | 'EventEntity'
  | 'OrganisationEntity'
  | 'SurveyEntity'
  | 'UserContextEntity';

export type CardData = Maybe<ArticleEntity>
  | Maybe<ContestEntity>
  | Maybe<DealEntity>
  | Maybe<EventEntity>
  | Maybe<OrganisationEntity>
  | Maybe<SurveyEntity>
  | Maybe<UserContextEntity>
  | undefined;

export type CardElement = {
  id?: Maybe<string>,

  address?: Maybe<AddressEntity>,

  // Either 
  category?: Maybe<string>,
  categoryTranslatables?: Maybe<Maybe<Translatable>[]>,
  categoryTranslatableField?: Maybe<string>,

  creator?: Maybe<string>,
  creatorImage?: Maybe<MediaEntity>,
  email?: Maybe<string>,
  date?: Maybe<string>,
  dateTime: boolean,
  image?: Maybe<MediaEntity>,

  text?: Maybe<string>,
  textTranslatableField?: Maybe<string>,

  title?: Maybe<string>,
  titleTranslatableField?: Maybe<string>,

  translatables?: Maybe<Maybe<Translatable>[]>,
}