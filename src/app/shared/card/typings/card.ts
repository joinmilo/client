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
  category?: Maybe<string>,
  creator?: Maybe<string>,
  creatorImage?: Maybe<MediaEntity>,
  date?: Maybe<string>,
  dateTime: boolean,
  email?: Maybe<string>,
  image?: Maybe<MediaEntity>,
  url?: Maybe<string | undefined>[],
  text?: Maybe<string>,
  title?: Maybe<string>,
}