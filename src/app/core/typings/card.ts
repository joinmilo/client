import { Maybe } from 'graphql/jsutils/Maybe';
import { AddressEntity, ArticleEntity, ContestEntity, DealEntity, EventEntity, MediaEntity, OrganisationEntity, SurveyEntity, UserContextEntity } from 'src/schema/schema';
import { Translatable } from './translatable';

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
  | undefined
  | null;

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