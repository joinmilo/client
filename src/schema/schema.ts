import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A 64-bit signed integer */
  Long: any;
  /** Built-in scalar for map-like structures */
  Map_Integer_DoubleScalar: any;
  /** Built-in scalar for map-like structures */
  Map_String_StringScalar: any;
  /** Built-in scalar representing a date-time with a UTC offset */
  OffsetDateTime: any;
};

export type AddressEntity = {
  __typename?: 'AddressEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  houseNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  place?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  suburb?: Maybe<SuburbEntity>;
};

export type AddressEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  houseNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  place?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  suburb?: InputMaybe<SuburbEntityInput>;
};

export type AnswerEntity = {
  __typename?: 'AnswerEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  question?: Maybe<QuestionEntity>;
  result?: Maybe<SurveyResultEntity>;
  selectedOptions?: Maybe<Array<Maybe<QuestionOptionEntity>>>;
  translatables?: Maybe<Array<Maybe<AnswerTranslatableEntity>>>;
};

export type AnswerEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  question?: InputMaybe<QuestionEntityInput>;
  result?: InputMaybe<SurveyResultEntityInput>;
  selectedOptions?: InputMaybe<Array<InputMaybe<QuestionOptionEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<AnswerTranslatableEntityInput>>>;
};

export type AnswerTranslatableEntity = {
  __typename?: 'AnswerTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type AnswerTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type AppEntity = {
  __typename?: 'AppEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  platform?: Maybe<AppPlatformEntity>;
  url?: Maybe<Scalars['String']>;
};

export type AppEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  platform?: InputMaybe<AppPlatformEntityInput>;
  url?: InputMaybe<Scalars['String']>;
};

export type AppPlatformEntity = {
  __typename?: 'AppPlatformEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type AppPlatformEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ArticleCategoryEntity = {
  __typename?: 'ArticleCategoryEntity';
  articles?: Maybe<Array<Maybe<ArticleEntity>>>;
  color?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<ArticleCategoryTranslatableEntity>>>;
};

export type ArticleCategoryEntityInput = {
  articles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  color?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<ArticleCategoryTranslatableEntityInput>>>;
};

export type ArticleCategoryTranslatableEntity = {
  __typename?: 'ArticleCategoryTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ArticleCategoryTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ArticleCommentEntity = {
  __typename?: 'ArticleCommentEntity';
  article?: Maybe<ArticleEntity>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<ArticleCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type ArticleCommentEntityInput = {
  article?: InputMaybe<ArticleEntityInput>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<ArticleCommentTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type ArticleCommentTranslatableEntity = {
  __typename?: 'ArticleCommentTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type ArticleCommentTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  approved?: Maybe<Scalars['Boolean']>;
  author?: Maybe<UserContextEntity>;
  calculatedRatings?: Maybe<RatingDto>;
  captchaToken?: Maybe<Scalars['String']>;
  category?: Maybe<ArticleCategoryEntity>;
  comments?: Maybe<Array<Maybe<ArticleCommentEntity>>>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  lastArticleComment?: Maybe<ArticleCommentEntity>;
  metaDescription?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  publicAuthor?: Maybe<PublicAuthorEntity>;
  ratings?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<ArticleTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<ArticleMediaEntity>>>;
  visitors?: Maybe<Array<Maybe<ArticleVisitorEntity>>>;
};

export type ArticleEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  author?: InputMaybe<UserContextEntityInput>;
  captchaToken?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<ArticleCategoryEntityInput>;
  comments?: InputMaybe<Array<InputMaybe<ArticleCommentEntityInput>>>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  publicAuthor?: InputMaybe<PublicAuthorEntityInput>;
  ratings?: InputMaybe<Array<InputMaybe<ArticleRatingEntityInput>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sponsored?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<ArticleTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<ArticleMediaEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<ArticleVisitorEntityInput>>>;
};

export type ArticleMediaEntity = {
  __typename?: 'ArticleMediaEntity';
  article?: Maybe<ArticleEntity>;
  card?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  title?: Maybe<Scalars['Boolean']>;
};

export type ArticleMediaEntityInput = {
  article?: InputMaybe<ArticleEntityInput>;
  card?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  title?: InputMaybe<Scalars['Boolean']>;
};

export type ArticleRatingEntity = {
  __typename?: 'ArticleRatingEntity';
  article?: Maybe<ArticleEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  score?: Maybe<Scalars['Int']>;
  userContext?: Maybe<UserContextEntity>;
};

export type ArticleRatingEntityInput = {
  article?: InputMaybe<ArticleEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  score?: InputMaybe<Scalars['Int']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type ArticleTranslatableEntity = {
  __typename?: 'ArticleTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type ArticleTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
};

export type ArticleVisitorEntity = {
  __typename?: 'ArticleVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<ArticleEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type ArticleVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type AssignmentEntity = {
  __typename?: 'AssignmentEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  survey?: Maybe<SurveyEntity>;
  userContext?: Maybe<UserContextEntity>;
};

export type AssignmentEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  survey?: InputMaybe<SurveyEntityInput>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type AttendeeConfigurationEntity = {
  __typename?: 'AttendeeConfigurationEntity';
  approval?: Maybe<Scalars['Boolean']>;
  attendees?: Maybe<Array<Maybe<AttendeeEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  id?: Maybe<Scalars['String']>;
  maxAttendees?: Maybe<Scalars['Int']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type AttendeeConfigurationEntityInput = {
  approval?: InputMaybe<Scalars['Boolean']>;
  attendees?: InputMaybe<Array<InputMaybe<AttendeeEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  maxAttendees?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type AttendeeEntity = {
  __typename?: 'AttendeeEntity';
  approved?: Maybe<Scalars['Boolean']>;
  configuration?: Maybe<AttendeeConfigurationEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  userContext?: Maybe<UserContextEntity>;
};

export type AttendeeEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  configuration?: InputMaybe<AttendeeConfigurationEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type ChannelEntity = {
  __typename?: 'ChannelEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ChannelEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ConfigurationEntity = {
  __typename?: 'ConfigurationEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type ConfigurationEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  value?: InputMaybe<Scalars['String']>;
};

export enum ConjunctionOperator {
  And = 'AND',
  AndNot = 'AND_NOT',
  Or = 'OR',
  OrNot = 'OR_NOT'
}

export type ContactEntity = {
  __typename?: 'ContactEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  preferredContact?: Maybe<Scalars['Boolean']>;
  website?: Maybe<Scalars['String']>;
};

export type ContactEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  preferredContact?: InputMaybe<Scalars['Boolean']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ContestEntity = {
  __typename?: 'ContestEntity';
  contact?: Maybe<ContactEntity>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  multiSubmission?: Maybe<Scalars['Boolean']>;
  multiVote?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  offer?: Maybe<Scalars['Boolean']>;
  participation?: Maybe<Array<Maybe<ContestParticipationEntity>>>;
  participationEndDate?: Maybe<Scalars['OffsetDateTime']>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  translatables?: Maybe<Array<Maybe<ContestTranslatableEntity>>>;
  type?: Maybe<ContestTypeEntity>;
  uploads?: Maybe<Array<Maybe<ContestMediaEntity>>>;
  voteEndDate?: Maybe<Scalars['OffsetDateTime']>;
};

export type ContestEntityInput = {
  contact?: InputMaybe<ContactEntityInput>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  multiSubmission?: InputMaybe<Scalars['Boolean']>;
  multiVote?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  offer?: InputMaybe<Scalars['Boolean']>;
  participation?: InputMaybe<Array<InputMaybe<ContestParticipationEntityInput>>>;
  participationEndDate?: InputMaybe<Scalars['OffsetDateTime']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sponsored?: InputMaybe<Scalars['Boolean']>;
  translatables?: InputMaybe<Array<InputMaybe<ContestTranslatableEntityInput>>>;
  type?: InputMaybe<ContestTypeEntityInput>;
  uploads?: InputMaybe<Array<InputMaybe<ContestMediaEntityInput>>>;
  voteEndDate?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type ContestMediaEntity = {
  __typename?: 'ContestMediaEntity';
  card?: Maybe<Scalars['Boolean']>;
  contest?: Maybe<ContestEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  title?: Maybe<Scalars['Boolean']>;
};

export type ContestMediaEntityInput = {
  card?: InputMaybe<Scalars['Boolean']>;
  contest?: InputMaybe<ContestEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  title?: InputMaybe<Scalars['Boolean']>;
};

export type ContestParticipationEntity = {
  __typename?: 'ContestParticipationEntity';
  contest?: Maybe<ContestEntity>;
  contestVotes?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  mediaSubmissions?: Maybe<Array<Maybe<ContestParticipationMediaEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  textSubmission?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<ContestParticipationTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
  winner?: Maybe<Scalars['Boolean']>;
};

export type ContestParticipationEntityInput = {
  contest?: InputMaybe<ContestEntityInput>;
  contestVotes?: InputMaybe<Array<InputMaybe<ContestVoteEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  mediaSubmissions?: InputMaybe<Array<InputMaybe<ContestParticipationMediaEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  textSubmission?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<ContestParticipationTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
  winner?: InputMaybe<Scalars['Boolean']>;
};

export type ContestParticipationMediaEntity = {
  __typename?: 'ContestParticipationMediaEntity';
  contestParticipation?: Maybe<ContestParticipationEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type ContestParticipationMediaEntityInput = {
  contestParticipation?: InputMaybe<ContestParticipationEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type ContestParticipationTranslatableEntity = {
  __typename?: 'ContestParticipationTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  textSubmission?: Maybe<Scalars['String']>;
};

export type ContestParticipationTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  textSubmission?: InputMaybe<Scalars['String']>;
};

export type ContestTranslatableEntity = {
  __typename?: 'ContestTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type ContestTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
};

export type ContestTypeEntity = {
  __typename?: 'ContestTypeEntity';
  contests?: Maybe<Array<Maybe<ContestEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<ContestTypeTranslatableEntity>>>;
};

export type ContestTypeEntityInput = {
  contests?: InputMaybe<Array<InputMaybe<ContestEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<ContestTypeTranslatableEntityInput>>>;
};

export type ContestTypeTranslatableEntity = {
  __typename?: 'ContestTypeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ContestTypeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ContestVoteEntity = {
  __typename?: 'ContestVoteEntity';
  contestParticipation?: Maybe<ContestParticipationEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  userContext?: Maybe<UserContextEntity>;
};

export type ContestVoteEntityInput = {
  contestParticipation?: InputMaybe<ContestParticipationEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type DealCategoryEntity = {
  __typename?: 'DealCategoryEntity';
  color?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  deals?: Maybe<Array<Maybe<DealEntity>>>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<DealCategoryTranslatableEntity>>>;
};

export type DealCategoryEntityInput = {
  color?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  deals?: InputMaybe<Array<InputMaybe<DealEntityInput>>>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<DealCategoryTranslatableEntityInput>>>;
};

export type DealCategoryTranslatableEntity = {
  __typename?: 'DealCategoryTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type DealCategoryTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DealEntity = {
  __typename?: 'DealEntity';
  address?: Maybe<AddressEntity>;
  category?: Maybe<DealCategoryEntity>;
  contact?: Maybe<ContactEntity>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  creator?: Maybe<UserContextEntity>;
  id?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  offer?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  translatables?: Maybe<Array<Maybe<DealTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<DealMediaEntity>>>;
  visitors?: Maybe<Array<Maybe<DealVisitorEntity>>>;
};

export type DealEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  category?: InputMaybe<DealCategoryEntityInput>;
  contact?: InputMaybe<ContactEntityInput>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  creator?: InputMaybe<UserContextEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  offer?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Float']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sponsored?: InputMaybe<Scalars['Boolean']>;
  translatables?: InputMaybe<Array<InputMaybe<DealTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<DealMediaEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<DealVisitorEntityInput>>>;
};

export type DealMediaEntity = {
  __typename?: 'DealMediaEntity';
  card?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  deal?: Maybe<DealEntity>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  title?: Maybe<Scalars['Boolean']>;
};

export type DealMediaEntityInput = {
  card?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  deal?: InputMaybe<DealEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  title?: InputMaybe<Scalars['Boolean']>;
};

export type DealTranslatableEntity = {
  __typename?: 'DealTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type DealTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
};

export type DealVisitorEntity = {
  __typename?: 'DealVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<DealEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type DealVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type ErrorMessageEntity = {
  __typename?: 'ErrorMessageEntity';
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  message?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type ErrorMessageEntityInput = {
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  message?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type EventCategoryEntity = {
  __typename?: 'EventCategoryEntity';
  color?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<EventCategoryTranslatableEntity>>>;
};

export type EventCategoryEntityInput = {
  color?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<EventCategoryTranslatableEntityInput>>>;
};

export type EventCategoryTranslatableEntity = {
  __typename?: 'EventCategoryTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type EventCategoryTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EventCommentEntity = {
  __typename?: 'EventCommentEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<EventCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type EventCommentEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<EventCommentTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type EventCommentTranslatableEntity = {
  __typename?: 'EventCommentTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type EventCommentTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type EventEntity = {
  __typename?: 'EventEntity';
  address?: Maybe<AddressEntity>;
  attendeeConfiguration?: Maybe<AttendeeConfigurationEntity>;
  calculatedRatings?: Maybe<RatingDto>;
  category?: Maybe<EventCategoryEntity>;
  comments?: Maybe<Array<Maybe<EventCommentEntity>>>;
  contact?: Maybe<ContactEntity>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  creator?: Maybe<UserContextEntity>;
  entryFee?: Maybe<Scalars['Float']>;
  hasSchedules?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  lastEventComment?: Maybe<EventCommentEntity>;
  metaDescription?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  organisation?: Maybe<OrganisationEntity>;
  ratings?: Maybe<Array<Maybe<EventRatingEntity>>>;
  schedule?: Maybe<ScheduleEntity>;
  schedules?: Maybe<Array<Maybe<ScheduleEntity>>>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  targetGroups?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  translatables?: Maybe<Array<Maybe<EventTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<EventMediaEntity>>>;
  videoChatLink?: Maybe<Scalars['String']>;
  visitors?: Maybe<Array<Maybe<EventVisitorEntity>>>;
};


export type EventEntityScheduleArgs = {
  begin?: InputMaybe<Scalars['OffsetDateTime']>;
  end?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type EventEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  attendeeConfiguration?: InputMaybe<AttendeeConfigurationEntityInput>;
  category?: InputMaybe<EventCategoryEntityInput>;
  comments?: InputMaybe<Array<InputMaybe<EventCommentEntityInput>>>;
  contact?: InputMaybe<ContactEntityInput>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  creator?: InputMaybe<UserContextEntityInput>;
  entryFee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  ratings?: InputMaybe<Array<InputMaybe<EventRatingEntityInput>>>;
  schedules?: InputMaybe<Array<InputMaybe<ScheduleEntityInput>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sponsored?: InputMaybe<Scalars['Boolean']>;
  targetGroups?: InputMaybe<Array<InputMaybe<EventTargetGroupEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<EventTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<EventMediaEntityInput>>>;
  videoChatLink?: InputMaybe<Scalars['String']>;
  visitors?: InputMaybe<Array<InputMaybe<EventVisitorEntityInput>>>;
};

export type EventMediaEntity = {
  __typename?: 'EventMediaEntity';
  card?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  title?: Maybe<Scalars['Boolean']>;
};

export type EventMediaEntityInput = {
  card?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  title?: InputMaybe<Scalars['Boolean']>;
};

export type EventRatingEntity = {
  __typename?: 'EventRatingEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  score?: Maybe<Scalars['Int']>;
  userContext?: Maybe<UserContextEntity>;
};

export type EventRatingEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  score?: InputMaybe<Scalars['Int']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type EventTargetGroupEntity = {
  __typename?: 'EventTargetGroupEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<EventTargetGroupTranslatableEntity>>>;
};

export type EventTargetGroupEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<EventTargetGroupTranslatableEntityInput>>>;
};

export type EventTargetGroupTranslatableEntity = {
  __typename?: 'EventTargetGroupTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type EventTargetGroupTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EventTranslatableEntity = {
  __typename?: 'EventTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type EventTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
};

export type EventVisitorEntity = {
  __typename?: 'EventVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<EventEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type EventVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type FeatureEntity = {
  __typename?: 'FeatureEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  menuItem?: Maybe<Array<Maybe<MenuItemEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  pageFeatures?: Maybe<Array<Maybe<PageFeatureEntity>>>;
  translatables?: Maybe<Array<Maybe<FeatureTranslatableEntity>>>;
};

export type FeatureEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  menuItem?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  pageFeatures?: InputMaybe<Array<InputMaybe<PageFeatureEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<FeatureTranslatableEntityInput>>>;
};

export type FeatureTranslatableEntity = {
  __typename?: 'FeatureTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type FeatureTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterSortPaginateInput = {
  dir?: InputMaybe<Scalars['String']>;
  expression?: InputMaybe<QueryExpressionInput>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type FormTemplateTypeEntity = {
  __typename?: 'FormTemplateTypeEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<FormTemplateTypeTranslatableEntity>>>;
};

export type FormTemplateTypeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<FormTemplateTypeTranslatableEntityInput>>>;
};

export type FormTemplateTypeTranslatableEntity = {
  __typename?: 'FormTemplateTypeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type FormTemplateTypeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FriendEntity = {
  __typename?: 'FriendEntity';
  accepted?: Maybe<Scalars['Boolean']>;
  addressee?: Maybe<UserContextEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  requester?: Maybe<UserContextEntity>;
};

export type FriendEntityInput = {
  accepted?: InputMaybe<Scalars['Boolean']>;
  addressee?: InputMaybe<UserContextEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  requester?: InputMaybe<UserContextEntityInput>;
};

export type InformationDto = {
  __typename?: 'InformationDto';
  version?: Maybe<Scalars['String']>;
};

export type LabelEntity = {
  __typename?: 'LabelEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  tagId?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<LabelTranslatablesEntity>>>;
};

export type LabelEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  tagId?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<LabelTranslatablesEntityInput>>>;
};

export type LabelTranslatablesEntity = {
  __typename?: 'LabelTranslatablesEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type LabelTranslatablesEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type LanguageEntity = {
  __typename?: 'LanguageEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type LanguageEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  credits?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Long']>;
};

export type MediaEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  credits?: InputMaybe<Scalars['String']>;
  extension?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Long']>;
};

export type MemberEntity = {
  __typename?: 'MemberEntity';
  admin?: Maybe<Scalars['Boolean']>;
  approved?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisation?: Maybe<OrganisationEntity>;
  userContext?: Maybe<UserContextEntity>;
};

export type MemberEntityInput = {
  admin?: InputMaybe<Scalars['Boolean']>;
  approved?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type MenuItemEntity = {
  __typename?: 'MenuItemEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  feature?: Maybe<FeatureEntity>;
  header?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  page?: Maybe<PageEntity>;
  parent?: Maybe<MenuItemEntity>;
  shortDescription?: Maybe<Scalars['String']>;
  subMenuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  translatables?: Maybe<Array<Maybe<MenuItemTranslatableEntity>>>;
};

export type MenuItemEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  feature?: InputMaybe<FeatureEntityInput>;
  header?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<PageEntityInput>;
  parent?: InputMaybe<MenuItemEntityInput>;
  shortDescription?: InputMaybe<Scalars['String']>;
  subMenuItems?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<MenuItemTranslatableEntityInput>>>;
};

export type MenuItemTranslatableEntity = {
  __typename?: 'MenuItemTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type MenuItemTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
};

export type MessageDefinitionEntity = {
  __typename?: 'MessageDefinitionEntity';
  channels?: Maybe<Array<Maybe<ChannelEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  template?: Maybe<MessageTemplateEntity>;
  translatables?: Maybe<Array<Maybe<MessageDefinitionTranslatableEntity>>>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type MessageDefinitionEntityInput = {
  channels?: InputMaybe<Array<InputMaybe<ChannelEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  template?: InputMaybe<MessageTemplateEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<MessageDefinitionTranslatableEntityInput>>>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type MessageDefinitionTranslatableEntity = {
  __typename?: 'MessageDefinitionTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<MessageDefinitionEntity>;
};

export type MessageDefinitionTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<MessageDefinitionEntityInput>;
};

export type MessageDto = {
  __typename?: 'MessageDto';
  content?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['Map_String_StringScalar']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<NotificationType>;
};

export type MessageDtoInput = {
  content?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['Map_String_StringScalar']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<NotificationType>;
};

export type MessageTemplateEntity = {
  __typename?: 'MessageTemplateEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  definitions?: Maybe<Array<Maybe<MessageDefinitionEntity>>>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<MessageTemplateTranslatableEntity>>>;
};

export type MessageTemplateEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  definitions?: InputMaybe<Array<InputMaybe<MessageDefinitionEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<MessageTemplateTranslatableEntityInput>>>;
};

export type MessageTemplateTranslatableEntity = {
  __typename?: 'MessageTemplateTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<MessageTemplateEntity>;
};

export type MessageTemplateTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  parent?: InputMaybe<MessageTemplateEntityInput>;
};

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  addUploads?: Maybe<UserEntity>;
  changePassword?: Maybe<Scalars['Boolean']>;
  checkPassword?: Maybe<Scalars['Float']>;
  createToken?: Maybe<TokenDto>;
  deleteAddress?: Maybe<Scalars['Boolean']>;
  deleteAddresses?: Maybe<Scalars['Boolean']>;
  deleteAnswer?: Maybe<Scalars['Boolean']>;
  deleteAnswers?: Maybe<Scalars['Boolean']>;
  deleteApp?: Maybe<Scalars['Boolean']>;
  deleteApps?: Maybe<Scalars['Boolean']>;
  deleteArticle?: Maybe<Scalars['Boolean']>;
  deleteArticleCategories?: Maybe<Scalars['Boolean']>;
  deleteArticleCategory?: Maybe<Scalars['Boolean']>;
  deleteArticleComment?: Maybe<Scalars['Boolean']>;
  deleteArticleComments?: Maybe<Scalars['Boolean']>;
  deleteArticleRating?: Maybe<Scalars['Boolean']>;
  deleteArticleRatings?: Maybe<Scalars['Boolean']>;
  deleteArticles?: Maybe<Scalars['Boolean']>;
  deleteAssignment?: Maybe<Scalars['Boolean']>;
  deleteAssignments?: Maybe<Scalars['Boolean']>;
  deleteAttendee?: Maybe<Scalars['Boolean']>;
  deleteAttendees?: Maybe<Scalars['Boolean']>;
  deleteConfiguration?: Maybe<Scalars['Boolean']>;
  deleteConfigurations?: Maybe<Scalars['Boolean']>;
  deleteContact?: Maybe<Scalars['Boolean']>;
  deleteContacts?: Maybe<Scalars['Boolean']>;
  deleteContest?: Maybe<Scalars['Boolean']>;
  deleteContestType?: Maybe<Scalars['Boolean']>;
  deleteContestTypes?: Maybe<Scalars['Boolean']>;
  deleteContestVote?: Maybe<Scalars['Boolean']>;
  deleteContestVotes?: Maybe<Scalars['Boolean']>;
  deleteContests?: Maybe<Scalars['Boolean']>;
  deleteDeal?: Maybe<Scalars['Boolean']>;
  deleteDealCategories?: Maybe<Scalars['Boolean']>;
  deleteDealCategory?: Maybe<Scalars['Boolean']>;
  deleteDeals?: Maybe<Scalars['Boolean']>;
  deleteErrorMessage?: Maybe<Scalars['Boolean']>;
  deleteErrorMessages?: Maybe<Scalars['Boolean']>;
  deleteEvent?: Maybe<Scalars['Boolean']>;
  deleteEventCategories?: Maybe<Scalars['Boolean']>;
  deleteEventCategory?: Maybe<Scalars['Boolean']>;
  deleteEventComment?: Maybe<Scalars['Boolean']>;
  deleteEventComments?: Maybe<Scalars['Boolean']>;
  deleteEventRating?: Maybe<Scalars['Boolean']>;
  deleteEventRatings?: Maybe<Scalars['Boolean']>;
  deleteEventTargetGroup?: Maybe<Scalars['Boolean']>;
  deleteEventTargetGroups?: Maybe<Scalars['Boolean']>;
  deleteEvents?: Maybe<Scalars['Boolean']>;
  deleteLabel?: Maybe<Scalars['Boolean']>;
  deleteLabels?: Maybe<Scalars['Boolean']>;
  deleteLanguage?: Maybe<Scalars['Boolean']>;
  deleteLanguages?: Maybe<Scalars['Boolean']>;
  deleteMe?: Maybe<Scalars['Boolean']>;
  deleteMember?: Maybe<Scalars['Boolean']>;
  deleteMembers?: Maybe<Scalars['Boolean']>;
  deleteMenuItem?: Maybe<Scalars['Boolean']>;
  deleteMenuItems?: Maybe<Scalars['Boolean']>;
  deleteMessageDefinition?: Maybe<Scalars['Boolean']>;
  deleteMessageDefinitions?: Maybe<Scalars['Boolean']>;
  deleteMessageTemplate?: Maybe<Scalars['Boolean']>;
  deleteMessageTemplates?: Maybe<Scalars['Boolean']>;
  deleteNotification?: Maybe<Scalars['Boolean']>;
  deleteNotifications?: Maybe<Scalars['Boolean']>;
  deleteOrganisation?: Maybe<Scalars['Boolean']>;
  deleteOrganisationComment?: Maybe<Scalars['Boolean']>;
  deleteOrganisationComments?: Maybe<Scalars['Boolean']>;
  deleteOrganisationRating?: Maybe<Scalars['Boolean']>;
  deleteOrganisationRatings?: Maybe<Scalars['Boolean']>;
  deleteOrganisations?: Maybe<Scalars['Boolean']>;
  deletePage?: Maybe<Scalars['Boolean']>;
  deletePages?: Maybe<Scalars['Boolean']>;
  deletePublicAuthor?: Maybe<Scalars['Boolean']>;
  deletePublicAuthors?: Maybe<Scalars['Boolean']>;
  deleteQuestion?: Maybe<Scalars['Boolean']>;
  deleteQuestionOption?: Maybe<Scalars['Boolean']>;
  deleteQuestionOptions?: Maybe<Scalars['Boolean']>;
  deleteQuestionType?: Maybe<Scalars['Boolean']>;
  deleteQuestionTypes?: Maybe<Scalars['Boolean']>;
  deleteQuestions?: Maybe<Scalars['Boolean']>;
  deleteReport?: Maybe<Scalars['Boolean']>;
  deleteReportType?: Maybe<Scalars['Boolean']>;
  deleteReportTypes?: Maybe<Scalars['Boolean']>;
  deleteReports?: Maybe<Scalars['Boolean']>;
  deleteRole?: Maybe<Scalars['Boolean']>;
  deleteRoles?: Maybe<Scalars['Boolean']>;
  deleteSchedule?: Maybe<Scalars['Boolean']>;
  deleteSchedules?: Maybe<Scalars['Boolean']>;
  deleteSocialMedia?: Maybe<Scalars['Boolean']>;
  deleteSocialMedias?: Maybe<Scalars['Boolean']>;
  deleteSubscription?: Maybe<Scalars['Boolean']>;
  deleteSubscriptions?: Maybe<Scalars['Boolean']>;
  deleteSuburb?: Maybe<Scalars['Boolean']>;
  deleteSuburbs?: Maybe<Scalars['Boolean']>;
  deleteSurvey?: Maybe<Scalars['Boolean']>;
  deleteSurveyResult?: Maybe<Scalars['Boolean']>;
  deleteSurveyResults?: Maybe<Scalars['Boolean']>;
  deleteSurveyState?: Maybe<Scalars['Boolean']>;
  deleteSurveyStates?: Maybe<Scalars['Boolean']>;
  deleteSurveys?: Maybe<Scalars['Boolean']>;
  deleteTheme?: Maybe<Scalars['Boolean']>;
  deleteThemes?: Maybe<Scalars['Boolean']>;
  deleteUploads?: Maybe<UserEntity>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  deleteUserContext?: Maybe<Scalars['Boolean']>;
  deleteUserContexts?: Maybe<Scalars['Boolean']>;
  deleteUsers?: Maybe<Scalars['Boolean']>;
  refreshToken?: Maybe<TokenDto>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  saveAddress?: Maybe<AddressEntity>;
  saveAddresses?: Maybe<Array<Maybe<AddressEntity>>>;
  saveAnswer?: Maybe<AnswerEntity>;
  saveAnswers?: Maybe<Array<Maybe<AnswerEntity>>>;
  saveApp?: Maybe<AppEntity>;
  saveApps?: Maybe<Array<Maybe<AppEntity>>>;
  saveArticle?: Maybe<ArticleEntity>;
  saveArticleCategories?: Maybe<Array<Maybe<ArticleCategoryEntity>>>;
  saveArticleCategory?: Maybe<ArticleCategoryEntity>;
  saveArticleComment?: Maybe<ArticleCommentEntity>;
  saveArticleComments?: Maybe<Array<Maybe<ArticleCommentEntity>>>;
  saveArticleRating?: Maybe<ArticleRatingEntity>;
  saveArticleRatings?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  saveArticles?: Maybe<Array<Maybe<ArticleEntity>>>;
  saveAssignment?: Maybe<AssignmentEntity>;
  saveAssignments?: Maybe<Array<Maybe<AssignmentEntity>>>;
  saveAttendee?: Maybe<AttendeeEntity>;
  saveAttendees?: Maybe<Array<Maybe<AttendeeEntity>>>;
  saveConfiguration?: Maybe<ConfigurationEntity>;
  saveConfigurations?: Maybe<Array<Maybe<ConfigurationEntity>>>;
  saveContact?: Maybe<ContactEntity>;
  saveContacts?: Maybe<Array<Maybe<ContactEntity>>>;
  saveContest?: Maybe<ContestEntity>;
  saveContestType?: Maybe<ContestTypeEntity>;
  saveContestTypes?: Maybe<Array<Maybe<ContestTypeEntity>>>;
  saveContestVote?: Maybe<ContestVoteEntity>;
  saveContestVotes?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  saveContests?: Maybe<Array<Maybe<ContestEntity>>>;
  saveDeal?: Maybe<DealEntity>;
  saveDealCategories?: Maybe<Array<Maybe<DealCategoryEntity>>>;
  saveDealCategory?: Maybe<DealCategoryEntity>;
  saveDeals?: Maybe<Array<Maybe<DealEntity>>>;
  saveErrorMessage?: Maybe<ErrorMessageEntity>;
  saveErrorMessages?: Maybe<Array<Maybe<ErrorMessageEntity>>>;
  saveEvent?: Maybe<EventEntity>;
  saveEventCategories?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  saveEventCategory?: Maybe<EventCategoryEntity>;
  saveEventComment?: Maybe<EventCommentEntity>;
  saveEventComments?: Maybe<Array<Maybe<EventCommentEntity>>>;
  saveEventRating?: Maybe<EventRatingEntity>;
  saveEventRatings?: Maybe<Array<Maybe<EventRatingEntity>>>;
  saveEventTargetGroup?: Maybe<EventTargetGroupEntity>;
  saveEventTargetGroups?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  saveEvents?: Maybe<Array<Maybe<EventEntity>>>;
  saveLabel?: Maybe<LabelEntity>;
  saveLabels?: Maybe<Array<Maybe<LabelEntity>>>;
  saveLanguage?: Maybe<LanguageEntity>;
  saveLanguages?: Maybe<Array<Maybe<LanguageEntity>>>;
  saveMe?: Maybe<UserEntity>;
  saveMember?: Maybe<MemberEntity>;
  saveMembers?: Maybe<Array<Maybe<MemberEntity>>>;
  saveMenuItem?: Maybe<MenuItemEntity>;
  saveMenuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  saveMessageDefinition?: Maybe<MessageDefinitionEntity>;
  saveMessageDefinitions?: Maybe<Array<Maybe<MessageDefinitionEntity>>>;
  saveMessageTemplate?: Maybe<MessageTemplateEntity>;
  saveMessageTemplates?: Maybe<Array<Maybe<MessageTemplateEntity>>>;
  saveNotification?: Maybe<NotificationEntity>;
  saveNotifications?: Maybe<Array<Maybe<NotificationEntity>>>;
  saveOrganisation?: Maybe<OrganisationEntity>;
  saveOrganisationComment?: Maybe<OrganisationCommentEntity>;
  saveOrganisationComments?: Maybe<Array<Maybe<OrganisationCommentEntity>>>;
  saveOrganisationRating?: Maybe<OrganisationRatingEntity>;
  saveOrganisationRatings?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  saveOrganisations?: Maybe<Array<Maybe<OrganisationEntity>>>;
  savePage?: Maybe<PageEntity>;
  savePages?: Maybe<Array<Maybe<PageEntity>>>;
  savePublicAuthor?: Maybe<PublicAuthorEntity>;
  savePublicAuthors?: Maybe<Array<Maybe<PublicAuthorEntity>>>;
  saveQuestion?: Maybe<QuestionEntity>;
  saveQuestionOption?: Maybe<QuestionOptionEntity>;
  saveQuestionOptions?: Maybe<Array<Maybe<QuestionOptionEntity>>>;
  saveQuestionType?: Maybe<QuestionTypeEntity>;
  saveQuestionTypes?: Maybe<Array<Maybe<QuestionTypeEntity>>>;
  saveQuestions?: Maybe<Array<Maybe<QuestionEntity>>>;
  saveReport?: Maybe<ReportEntity>;
  saveReportType?: Maybe<ReportTypeEntity>;
  saveReportTypes?: Maybe<Array<Maybe<ReportTypeEntity>>>;
  saveReports?: Maybe<Array<Maybe<ReportEntity>>>;
  saveRole?: Maybe<RoleEntity>;
  saveRoles?: Maybe<Array<Maybe<RoleEntity>>>;
  saveSchedule?: Maybe<ScheduleEntity>;
  saveSchedules?: Maybe<Array<Maybe<ScheduleEntity>>>;
  saveSocialMedia?: Maybe<SocialMediaEntity>;
  saveSocialMedias?: Maybe<Array<Maybe<SocialMediaEntity>>>;
  saveSubscription?: Maybe<SubscriptionEntity>;
  saveSubscriptions?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  saveSuburb?: Maybe<SuburbEntity>;
  saveSuburbs?: Maybe<Array<Maybe<SuburbEntity>>>;
  saveSurvey?: Maybe<SurveyEntity>;
  saveSurveyResult?: Maybe<SurveyResultEntity>;
  saveSurveyResults?: Maybe<Array<Maybe<SurveyResultEntity>>>;
  saveSurveyState?: Maybe<SurveyStateEntity>;
  saveSurveyStates?: Maybe<Array<Maybe<SurveyStateEntity>>>;
  saveSurveys?: Maybe<Array<Maybe<SurveyEntity>>>;
  saveTheme?: Maybe<ThemeEntity>;
  saveThemes?: Maybe<Array<Maybe<ThemeEntity>>>;
  saveUser?: Maybe<UserEntity>;
  saveUserContext?: Maybe<UserContextEntity>;
  saveUserContexts?: Maybe<Array<Maybe<UserContextEntity>>>;
  saveUsers?: Maybe<Array<Maybe<UserEntity>>>;
  sendError?: Maybe<Scalars['Boolean']>;
  sendGlobalPush?: Maybe<Scalars['Boolean']>;
  sendPasswordReset?: Maybe<Scalars['Boolean']>;
  sendVerification?: Maybe<Scalars['Boolean']>;
  verify?: Maybe<UserEntity>;
};


/** Mutation root */
export type MutationAddUploadsArgs = {
  uploads?: InputMaybe<Array<InputMaybe<UserContextMediaEntityInput>>>;
};


/** Mutation root */
export type MutationChangePasswordArgs = {
  newPassword?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationCheckPasswordArgs = {
  password?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationCreateTokenArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAddressArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAddressesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAnswerArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAnswersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAppArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAppsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteArticleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteArticleCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteArticleCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteArticleCommentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteArticleCommentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteArticleRatingArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteArticleRatingsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteArticlesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAssignmentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAssignmentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAttendeeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAttendeesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteConfigurationArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteConfigurationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteContactArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteContactsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteContestArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteContestTypeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteContestTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteContestVoteArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteContestVotesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteContestsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteDealArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteDealCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteDealCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteDealsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteErrorMessageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteErrorMessagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventCommentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventCommentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventRatingArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventRatingsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventTargetGroupArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventTargetGroupsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteLabelArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteLabelsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteLanguageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteLanguagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteMeArgs = {
  password?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMemberArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMembersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteMenuItemArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMenuItemsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteMessageDefinitionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMessageDefinitionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteMessageTemplateArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteMessageTemplatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteNotificationArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteNotificationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteOrganisationCommentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteOrganisationCommentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationRatingArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteOrganisationRatingsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeletePageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeletePagesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeletePublicAuthorArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeletePublicAuthorsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteQuestionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteQuestionOptionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteQuestionOptionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteQuestionTypeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteQuestionTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteQuestionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteReportArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteReportTypeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteReportTypesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteReportsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteRoleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteRolesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteScheduleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSchedulesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSocialMediaArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSocialMediasArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSubscriptionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSubscriptionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSuburbArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSuburbsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSurveyArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSurveyResultArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSurveyResultsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSurveyStateArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSurveyStatesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSurveysArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteThemeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteThemesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteUploadsArgs = {
  uploadIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteUserContextArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteUserContextsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteUsersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationRefreshTokenArgs = {
  refreshToken?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationResetPasswordArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSaveAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
};


/** Mutation root */
export type MutationSaveAddressesArgs = {
  entities?: InputMaybe<Array<InputMaybe<AddressEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAnswerArgs = {
  entity?: InputMaybe<AnswerEntityInput>;
};


/** Mutation root */
export type MutationSaveAnswersArgs = {
  entities?: InputMaybe<Array<InputMaybe<AnswerEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAppArgs = {
  entity?: InputMaybe<AppEntityInput>;
};


/** Mutation root */
export type MutationSaveAppsArgs = {
  entities?: InputMaybe<Array<InputMaybe<AppEntityInput>>>;
};


/** Mutation root */
export type MutationSaveArticleArgs = {
  entity?: InputMaybe<ArticleEntityInput>;
};


/** Mutation root */
export type MutationSaveArticleCategoriesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticleCategoryEntityInput>>>;
};


/** Mutation root */
export type MutationSaveArticleCategoryArgs = {
  entity?: InputMaybe<ArticleCategoryEntityInput>;
};


/** Mutation root */
export type MutationSaveArticleCommentArgs = {
  entity?: InputMaybe<ArticleCommentEntityInput>;
};


/** Mutation root */
export type MutationSaveArticleCommentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticleCommentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveArticleRatingArgs = {
  entity?: InputMaybe<ArticleRatingEntityInput>;
};


/** Mutation root */
export type MutationSaveArticleRatingsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticleRatingEntityInput>>>;
};


/** Mutation root */
export type MutationSaveArticlesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAssignmentArgs = {
  entity?: InputMaybe<AssignmentEntityInput>;
};


/** Mutation root */
export type MutationSaveAssignmentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<AssignmentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAttendeeArgs = {
  entity?: InputMaybe<AttendeeEntityInput>;
};


/** Mutation root */
export type MutationSaveAttendeesArgs = {
  entities?: InputMaybe<Array<InputMaybe<AttendeeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveConfigurationArgs = {
  entity?: InputMaybe<ConfigurationEntityInput>;
};


/** Mutation root */
export type MutationSaveConfigurationsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ConfigurationEntityInput>>>;
};


/** Mutation root */
export type MutationSaveContactArgs = {
  entity?: InputMaybe<ContactEntityInput>;
};


/** Mutation root */
export type MutationSaveContactsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContactEntityInput>>>;
};


/** Mutation root */
export type MutationSaveContestArgs = {
  entity?: InputMaybe<ContestEntityInput>;
};


/** Mutation root */
export type MutationSaveContestTypeArgs = {
  entity?: InputMaybe<ContestTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveContestTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContestTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveContestVoteArgs = {
  entity?: InputMaybe<ContestVoteEntityInput>;
};


/** Mutation root */
export type MutationSaveContestVotesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContestVoteEntityInput>>>;
};


/** Mutation root */
export type MutationSaveContestsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContestEntityInput>>>;
};


/** Mutation root */
export type MutationSaveDealArgs = {
  entity?: InputMaybe<DealEntityInput>;
};


/** Mutation root */
export type MutationSaveDealCategoriesArgs = {
  entities?: InputMaybe<Array<InputMaybe<DealCategoryEntityInput>>>;
};


/** Mutation root */
export type MutationSaveDealCategoryArgs = {
  entity?: InputMaybe<DealCategoryEntityInput>;
};


/** Mutation root */
export type MutationSaveDealsArgs = {
  entities?: InputMaybe<Array<InputMaybe<DealEntityInput>>>;
};


/** Mutation root */
export type MutationSaveErrorMessageArgs = {
  entity?: InputMaybe<ErrorMessageEntityInput>;
};


/** Mutation root */
export type MutationSaveErrorMessagesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ErrorMessageEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventArgs = {
  entity?: InputMaybe<EventEntityInput>;
};


/** Mutation root */
export type MutationSaveEventCategoriesArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventCategoryEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventCategoryArgs = {
  entity?: InputMaybe<EventCategoryEntityInput>;
};


/** Mutation root */
export type MutationSaveEventCommentArgs = {
  entity?: InputMaybe<EventCommentEntityInput>;
};


/** Mutation root */
export type MutationSaveEventCommentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventCommentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventRatingArgs = {
  entity?: InputMaybe<EventRatingEntityInput>;
};


/** Mutation root */
export type MutationSaveEventRatingsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventRatingEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventTargetGroupArgs = {
  entity?: InputMaybe<EventTargetGroupEntityInput>;
};


/** Mutation root */
export type MutationSaveEventTargetGroupsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventTargetGroupEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventsArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
};


/** Mutation root */
export type MutationSaveLabelArgs = {
  entity?: InputMaybe<LabelEntityInput>;
};


/** Mutation root */
export type MutationSaveLabelsArgs = {
  entities?: InputMaybe<Array<InputMaybe<LabelEntityInput>>>;
};


/** Mutation root */
export type MutationSaveLanguageArgs = {
  entity?: InputMaybe<LanguageEntityInput>;
};


/** Mutation root */
export type MutationSaveLanguagesArgs = {
  entities?: InputMaybe<Array<InputMaybe<LanguageEntityInput>>>;
};


/** Mutation root */
export type MutationSaveMeArgs = {
  entity?: InputMaybe<UserEntityInput>;
};


/** Mutation root */
export type MutationSaveMemberArgs = {
  entity?: InputMaybe<MemberEntityInput>;
};


/** Mutation root */
export type MutationSaveMembersArgs = {
  entities?: InputMaybe<Array<InputMaybe<MemberEntityInput>>>;
};


/** Mutation root */
export type MutationSaveMenuItemArgs = {
  entity?: InputMaybe<MenuItemEntityInput>;
};


/** Mutation root */
export type MutationSaveMenuItemsArgs = {
  entities?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
};


/** Mutation root */
export type MutationSaveMessageDefinitionArgs = {
  entity?: InputMaybe<MessageDefinitionEntityInput>;
};


/** Mutation root */
export type MutationSaveMessageDefinitionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<MessageDefinitionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveMessageTemplateArgs = {
  entity?: InputMaybe<MessageTemplateEntityInput>;
};


/** Mutation root */
export type MutationSaveMessageTemplatesArgs = {
  entities?: InputMaybe<Array<InputMaybe<MessageTemplateEntityInput>>>;
};


/** Mutation root */
export type MutationSaveNotificationArgs = {
  entity?: InputMaybe<NotificationEntityInput>;
};


/** Mutation root */
export type MutationSaveNotificationsArgs = {
  entities?: InputMaybe<Array<InputMaybe<NotificationEntityInput>>>;
};


/** Mutation root */
export type MutationSaveOrganisationArgs = {
  entity?: InputMaybe<OrganisationEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganisationCommentArgs = {
  entity?: InputMaybe<OrganisationCommentEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganisationCommentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganisationCommentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveOrganisationRatingArgs = {
  entity?: InputMaybe<OrganisationRatingEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganisationRatingsArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganisationRatingEntityInput>>>;
};


/** Mutation root */
export type MutationSaveOrganisationsArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganisationEntityInput>>>;
};


/** Mutation root */
export type MutationSavePageArgs = {
  entity?: InputMaybe<PageEntityInput>;
};


/** Mutation root */
export type MutationSavePagesArgs = {
  entities?: InputMaybe<Array<InputMaybe<PageEntityInput>>>;
};


/** Mutation root */
export type MutationSavePublicAuthorArgs = {
  entity?: InputMaybe<PublicAuthorEntityInput>;
};


/** Mutation root */
export type MutationSavePublicAuthorsArgs = {
  entities?: InputMaybe<Array<InputMaybe<PublicAuthorEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionArgs = {
  entity?: InputMaybe<QuestionEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionOptionArgs = {
  entity?: InputMaybe<QuestionOptionEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionOptionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<QuestionOptionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionTypeArgs = {
  entity?: InputMaybe<QuestionTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<QuestionTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<QuestionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveReportArgs = {
  entity?: InputMaybe<ReportEntityInput>;
};


/** Mutation root */
export type MutationSaveReportTypeArgs = {
  entity?: InputMaybe<ReportTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveReportTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ReportTypeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveReportsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ReportEntityInput>>>;
};


/** Mutation root */
export type MutationSaveRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};


/** Mutation root */
export type MutationSaveRolesArgs = {
  entities?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
};


/** Mutation root */
export type MutationSaveScheduleArgs = {
  entity?: InputMaybe<ScheduleEntityInput>;
};


/** Mutation root */
export type MutationSaveSchedulesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ScheduleEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSocialMediaArgs = {
  entity?: InputMaybe<SocialMediaEntityInput>;
};


/** Mutation root */
export type MutationSaveSocialMediasArgs = {
  entities?: InputMaybe<Array<InputMaybe<SocialMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSubscriptionArgs = {
  entity?: InputMaybe<SubscriptionEntityInput>;
};


/** Mutation root */
export type MutationSaveSubscriptionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SubscriptionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSuburbArgs = {
  entity?: InputMaybe<SuburbEntityInput>;
};


/** Mutation root */
export type MutationSaveSuburbsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SuburbEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSurveyArgs = {
  entity?: InputMaybe<SurveyEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyResultArgs = {
  entity?: InputMaybe<SurveyResultEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyResultsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyResultEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSurveyStateArgs = {
  entity?: InputMaybe<SurveyStateEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyStatesArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyStateEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSurveysArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyEntityInput>>>;
};


/** Mutation root */
export type MutationSaveThemeArgs = {
  entity?: InputMaybe<ThemeEntityInput>;
};


/** Mutation root */
export type MutationSaveThemesArgs = {
  entities?: InputMaybe<Array<InputMaybe<ThemeEntityInput>>>;
};


/** Mutation root */
export type MutationSaveUserArgs = {
  entity?: InputMaybe<UserEntityInput>;
};


/** Mutation root */
export type MutationSaveUserContextArgs = {
  entity?: InputMaybe<UserContextEntityInput>;
};


/** Mutation root */
export type MutationSaveUserContextsArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
};


/** Mutation root */
export type MutationSaveUsersArgs = {
  entities?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};


/** Mutation root */
export type MutationSendErrorArgs = {
  stackTrace?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSendGlobalPushArgs = {
  message?: InputMaybe<MessageDtoInput>;
};


/** Mutation root */
export type MutationSendPasswordResetArgs = {
  email?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSendVerificationArgs = {
  email?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationVerifyArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type NotificationEntity = {
  __typename?: 'NotificationEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  read?: Maybe<Scalars['Boolean']>;
  translatables?: Maybe<Array<Maybe<NotificationTranslatableEntity>>>;
  user?: Maybe<UserEntity>;
};

export type NotificationEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  read?: InputMaybe<Scalars['Boolean']>;
  translatables?: InputMaybe<Array<InputMaybe<NotificationTranslatableEntityInput>>>;
  user?: InputMaybe<UserEntityInput>;
};

export type NotificationTranslatableEntity = {
  __typename?: 'NotificationTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<NotificationEntity>;
  title?: Maybe<Scalars['String']>;
};

export type NotificationTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  parent?: InputMaybe<NotificationEntityInput>;
  title?: InputMaybe<Scalars['String']>;
};

export enum NotificationType {
  Chat = 'chat',
  DeletedUser = 'deletedUser',
  Evaluation = 'evaluation',
  Event = 'event',
  Global = 'global',
  JobAd = 'jobAd'
}

export type OrganisationCommentEntity = {
  __typename?: 'OrganisationCommentEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisation?: Maybe<OrganisationEntity>;
  translatables?: Maybe<Array<Maybe<OrganisationCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type OrganisationCommentEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<OrganisationCommentTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type OrganisationCommentTranslatableEntity = {
  __typename?: 'OrganisationCommentTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type OrganisationCommentTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type OrganisationEntity = {
  __typename?: 'OrganisationEntity';
  address?: Maybe<AddressEntity>;
  approved?: Maybe<Scalars['Boolean']>;
  calculatedRatings?: Maybe<RatingDto>;
  comments?: Maybe<Array<Maybe<OrganisationCommentEntity>>>;
  contact?: Maybe<ContactEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  id?: Maybe<Scalars['String']>;
  lastOrganisationComment?: Maybe<OrganisationCommentEntity>;
  members?: Maybe<Array<Maybe<MemberEntity>>>;
  metaDescription?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  ratings?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  translatables?: Maybe<Array<Maybe<OrganisationTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<OrganisationMediaEntity>>>;
  visitors?: Maybe<Array<Maybe<OrganisationVisitorEntity>>>;
};

export type OrganisationEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  approved?: InputMaybe<Scalars['Boolean']>;
  comments?: InputMaybe<Array<InputMaybe<OrganisationCommentEntityInput>>>;
  contact?: InputMaybe<ContactEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<InputMaybe<MemberEntityInput>>>;
  metaDescription?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  ratings?: InputMaybe<Array<InputMaybe<OrganisationRatingEntityInput>>>;
  slug?: InputMaybe<Scalars['String']>;
  sponsored?: InputMaybe<Scalars['Boolean']>;
  translatables?: InputMaybe<Array<InputMaybe<OrganisationTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<OrganisationMediaEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<OrganisationVisitorEntityInput>>>;
};

export type OrganisationMediaEntity = {
  __typename?: 'OrganisationMediaEntity';
  card?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisation?: Maybe<OrganisationEntity>;
  title?: Maybe<Scalars['Boolean']>;
};

export type OrganisationMediaEntityInput = {
  card?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  title?: InputMaybe<Scalars['Boolean']>;
};

export type OrganisationRatingEntity = {
  __typename?: 'OrganisationRatingEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisation?: Maybe<OrganisationEntity>;
  score?: Maybe<Scalars['Int']>;
  userContext?: Maybe<UserContextEntity>;
};

export type OrganisationRatingEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  score?: InputMaybe<Scalars['Int']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type OrganisationTranslatableEntity = {
  __typename?: 'OrganisationTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type OrganisationTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type OrganisationVisitorEntity = {
  __typename?: 'OrganisationVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<OrganisationEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type OrganisationVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  callText?: Maybe<Scalars['String']>;
  callUrl?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  isLanding?: Maybe<Scalars['Boolean']>;
  menuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  metaDescription?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  pageFeatures?: Maybe<Array<Maybe<PageFeatureEntity>>>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<PageTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<PageMediaEntity>>>;
  visitors?: Maybe<Array<Maybe<PageVisitorEntity>>>;
};

export type PageEntityInput = {
  callText?: InputMaybe<Scalars['String']>;
  callUrl?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isLanding?: InputMaybe<Scalars['Boolean']>;
  menuItems?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
  metaDescription?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  pageFeatures?: InputMaybe<Array<InputMaybe<PageFeatureEntityInput>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<PageTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<PageMediaEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<PageVisitorEntityInput>>>;
};

export type PageFeatureEntity = {
  __typename?: 'PageFeatureEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  feature?: Maybe<FeatureEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  order?: Maybe<Scalars['Int']>;
  page?: Maybe<PageEntity>;
};

export type PageFeatureEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  feature?: InputMaybe<FeatureEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  order?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<PageEntityInput>;
};

export type PageMediaEntity = {
  __typename?: 'PageMediaEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  page?: Maybe<PageEntity>;
  title?: Maybe<Scalars['Boolean']>;
};

export type PageMediaEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  page?: InputMaybe<PageEntityInput>;
  title?: InputMaybe<Scalars['Boolean']>;
};

export type PageTranslatableEntity = {
  __typename?: 'PageTranslatableEntity';
  callText?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
};

export type PageTranslatableEntityInput = {
  callText?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
};

export type PageVisitorEntity = {
  __typename?: 'PageVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<PageEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type PageVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type PageableList_AddressEntity = {
  __typename?: 'PageableList_AddressEntity';
  result?: Maybe<Array<Maybe<AddressEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AnswerEntity = {
  __typename?: 'PageableList_AnswerEntity';
  result?: Maybe<Array<Maybe<AnswerEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AppEntity = {
  __typename?: 'PageableList_AppEntity';
  result?: Maybe<Array<Maybe<AppEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ArticleCategoryEntity = {
  __typename?: 'PageableList_ArticleCategoryEntity';
  result?: Maybe<Array<Maybe<ArticleCategoryEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ArticleCommentEntity = {
  __typename?: 'PageableList_ArticleCommentEntity';
  result?: Maybe<Array<Maybe<ArticleCommentEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ArticleEntity = {
  __typename?: 'PageableList_ArticleEntity';
  result?: Maybe<Array<Maybe<ArticleEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ArticleRatingEntity = {
  __typename?: 'PageableList_ArticleRatingEntity';
  result?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AssignmentEntity = {
  __typename?: 'PageableList_AssignmentEntity';
  result?: Maybe<Array<Maybe<AssignmentEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AttendeeEntity = {
  __typename?: 'PageableList_AttendeeEntity';
  result?: Maybe<Array<Maybe<AttendeeEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ConfigurationEntity = {
  __typename?: 'PageableList_ConfigurationEntity';
  result?: Maybe<Array<Maybe<ConfigurationEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ContactEntity = {
  __typename?: 'PageableList_ContactEntity';
  result?: Maybe<Array<Maybe<ContactEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ContestEntity = {
  __typename?: 'PageableList_ContestEntity';
  result?: Maybe<Array<Maybe<ContestEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ContestTypeEntity = {
  __typename?: 'PageableList_ContestTypeEntity';
  result?: Maybe<Array<Maybe<ContestTypeEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ContestVoteEntity = {
  __typename?: 'PageableList_ContestVoteEntity';
  result?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_DealCategoryEntity = {
  __typename?: 'PageableList_DealCategoryEntity';
  result?: Maybe<Array<Maybe<DealCategoryEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_DealEntity = {
  __typename?: 'PageableList_DealEntity';
  result?: Maybe<Array<Maybe<DealEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ErrorMessageEntity = {
  __typename?: 'PageableList_ErrorMessageEntity';
  result?: Maybe<Array<Maybe<ErrorMessageEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventCategoryEntity = {
  __typename?: 'PageableList_EventCategoryEntity';
  result?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventCommentEntity = {
  __typename?: 'PageableList_EventCommentEntity';
  result?: Maybe<Array<Maybe<EventCommentEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventEntity = {
  __typename?: 'PageableList_EventEntity';
  result?: Maybe<Array<Maybe<EventEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventRatingEntity = {
  __typename?: 'PageableList_EventRatingEntity';
  result?: Maybe<Array<Maybe<EventRatingEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventTargetGroupEntity = {
  __typename?: 'PageableList_EventTargetGroupEntity';
  result?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_LabelEntity = {
  __typename?: 'PageableList_LabelEntity';
  result?: Maybe<Array<Maybe<LabelEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_LanguageEntity = {
  __typename?: 'PageableList_LanguageEntity';
  result?: Maybe<Array<Maybe<LanguageEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_MemberEntity = {
  __typename?: 'PageableList_MemberEntity';
  result?: Maybe<Array<Maybe<MemberEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_MenuItemEntity = {
  __typename?: 'PageableList_MenuItemEntity';
  result?: Maybe<Array<Maybe<MenuItemEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_MessageDefinitionEntity = {
  __typename?: 'PageableList_MessageDefinitionEntity';
  result?: Maybe<Array<Maybe<MessageDefinitionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_MessageTemplateEntity = {
  __typename?: 'PageableList_MessageTemplateEntity';
  result?: Maybe<Array<Maybe<MessageTemplateEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_NotificationEntity = {
  __typename?: 'PageableList_NotificationEntity';
  result?: Maybe<Array<Maybe<NotificationEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_OrganisationCommentEntity = {
  __typename?: 'PageableList_OrganisationCommentEntity';
  result?: Maybe<Array<Maybe<OrganisationCommentEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_OrganisationEntity = {
  __typename?: 'PageableList_OrganisationEntity';
  result?: Maybe<Array<Maybe<OrganisationEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_OrganisationRatingEntity = {
  __typename?: 'PageableList_OrganisationRatingEntity';
  result?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_PageEntity = {
  __typename?: 'PageableList_PageEntity';
  result?: Maybe<Array<Maybe<PageEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_PublicAuthorEntity = {
  __typename?: 'PageableList_PublicAuthorEntity';
  result?: Maybe<Array<Maybe<PublicAuthorEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_QuestionEntity = {
  __typename?: 'PageableList_QuestionEntity';
  result?: Maybe<Array<Maybe<QuestionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_QuestionOptionEntity = {
  __typename?: 'PageableList_QuestionOptionEntity';
  result?: Maybe<Array<Maybe<QuestionOptionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_QuestionTypeEntity = {
  __typename?: 'PageableList_QuestionTypeEntity';
  result?: Maybe<Array<Maybe<QuestionTypeEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ReportEntity = {
  __typename?: 'PageableList_ReportEntity';
  result?: Maybe<Array<Maybe<ReportEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ReportTypeEntity = {
  __typename?: 'PageableList_ReportTypeEntity';
  result?: Maybe<Array<Maybe<ReportTypeEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_RoleEntity = {
  __typename?: 'PageableList_RoleEntity';
  result?: Maybe<Array<Maybe<RoleEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ScheduleEntity = {
  __typename?: 'PageableList_ScheduleEntity';
  result?: Maybe<Array<Maybe<ScheduleEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SocialMediaEntity = {
  __typename?: 'PageableList_SocialMediaEntity';
  result?: Maybe<Array<Maybe<SocialMediaEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SubscriptionEntity = {
  __typename?: 'PageableList_SubscriptionEntity';
  result?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SuburbEntity = {
  __typename?: 'PageableList_SuburbEntity';
  result?: Maybe<Array<Maybe<SuburbEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SurveyEntity = {
  __typename?: 'PageableList_SurveyEntity';
  result?: Maybe<Array<Maybe<SurveyEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SurveyResultEntity = {
  __typename?: 'PageableList_SurveyResultEntity';
  result?: Maybe<Array<Maybe<SurveyResultEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SurveyStateEntity = {
  __typename?: 'PageableList_SurveyStateEntity';
  result?: Maybe<Array<Maybe<SurveyStateEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ThemeEntity = {
  __typename?: 'PageableList_ThemeEntity';
  result?: Maybe<Array<Maybe<ThemeEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_UserContextEntity = {
  __typename?: 'PageableList_UserContextEntity';
  result?: Maybe<Array<Maybe<UserContextEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_UserEntity = {
  __typename?: 'PageableList_UserEntity';
  result?: Maybe<Array<Maybe<UserEntity>>>;
  total: Scalars['Long'];
};

export type PasswordResetEntity = {
  __typename?: 'PasswordResetEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<UserEntity>;
};

export type PasswordResetEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  token?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserEntityInput>;
};

export type PublicAuthorEntity = {
  __typename?: 'PublicAuthorEntity';
  articles?: Maybe<Array<Maybe<ArticleEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type PublicAuthorEntityInput = {
  articles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  getAddress?: Maybe<AddressEntity>;
  getAddresses?: Maybe<PageableList_AddressEntity>;
  getAnswer?: Maybe<AnswerEntity>;
  getAnswers?: Maybe<PageableList_AnswerEntity>;
  getApp?: Maybe<AppEntity>;
  getApps?: Maybe<PageableList_AppEntity>;
  getArticle?: Maybe<ArticleEntity>;
  getArticleCategories?: Maybe<PageableList_ArticleCategoryEntity>;
  getArticleCategory?: Maybe<ArticleCategoryEntity>;
  getArticleComment?: Maybe<ArticleCommentEntity>;
  getArticleComments?: Maybe<PageableList_ArticleCommentEntity>;
  getArticleRating?: Maybe<ArticleRatingEntity>;
  getArticleRatings?: Maybe<PageableList_ArticleRatingEntity>;
  getArticles?: Maybe<PageableList_ArticleEntity>;
  getAssignment?: Maybe<AssignmentEntity>;
  getAssignments?: Maybe<PageableList_AssignmentEntity>;
  getAttendee?: Maybe<AttendeeEntity>;
  getAttendees?: Maybe<PageableList_AttendeeEntity>;
  getConfiguration?: Maybe<ConfigurationEntity>;
  getConfigurations?: Maybe<PageableList_ConfigurationEntity>;
  getContact?: Maybe<ContactEntity>;
  getContacts?: Maybe<PageableList_ContactEntity>;
  getContest?: Maybe<ContestEntity>;
  getContestType?: Maybe<ContestTypeEntity>;
  getContestTypes?: Maybe<PageableList_ContestTypeEntity>;
  getContestVote?: Maybe<ContestVoteEntity>;
  getContestVotes?: Maybe<PageableList_ContestVoteEntity>;
  getContests?: Maybe<PageableList_ContestEntity>;
  getDeal?: Maybe<DealEntity>;
  getDealCategories?: Maybe<PageableList_DealCategoryEntity>;
  getDealCategory?: Maybe<DealCategoryEntity>;
  getDeals?: Maybe<PageableList_DealEntity>;
  getErrorMessage?: Maybe<ErrorMessageEntity>;
  getErrorMessages?: Maybe<PageableList_ErrorMessageEntity>;
  getEvent?: Maybe<EventEntity>;
  getEventCategories?: Maybe<PageableList_EventCategoryEntity>;
  getEventCategory?: Maybe<EventCategoryEntity>;
  getEventComment?: Maybe<EventCommentEntity>;
  getEventComments?: Maybe<PageableList_EventCommentEntity>;
  getEventRating?: Maybe<EventRatingEntity>;
  getEventRatings?: Maybe<PageableList_EventRatingEntity>;
  getEventTargetGroup?: Maybe<EventTargetGroupEntity>;
  getEventTargetGroups?: Maybe<PageableList_EventTargetGroupEntity>;
  getEvents?: Maybe<PageableList_EventEntity>;
  getInformation?: Maybe<InformationDto>;
  getLabel?: Maybe<LabelEntity>;
  getLabels?: Maybe<PageableList_LabelEntity>;
  getLanguage?: Maybe<LanguageEntity>;
  getLanguages?: Maybe<PageableList_LanguageEntity>;
  getMember?: Maybe<MemberEntity>;
  getMembers?: Maybe<PageableList_MemberEntity>;
  getMenuItem?: Maybe<MenuItemEntity>;
  getMenuItems?: Maybe<PageableList_MenuItemEntity>;
  getMessageDefinition?: Maybe<MessageDefinitionEntity>;
  getMessageDefinitions?: Maybe<PageableList_MessageDefinitionEntity>;
  getMessageTemplate?: Maybe<MessageTemplateEntity>;
  getMessageTemplates?: Maybe<PageableList_MessageTemplateEntity>;
  getNotification?: Maybe<NotificationEntity>;
  getNotifications?: Maybe<PageableList_NotificationEntity>;
  getOrganisation?: Maybe<OrganisationEntity>;
  getOrganisationComment?: Maybe<OrganisationCommentEntity>;
  getOrganisationComments?: Maybe<PageableList_OrganisationCommentEntity>;
  getOrganisationRating?: Maybe<OrganisationRatingEntity>;
  getOrganisationRatings?: Maybe<PageableList_OrganisationRatingEntity>;
  getOrganisations?: Maybe<PageableList_OrganisationEntity>;
  getPage?: Maybe<PageEntity>;
  getPages?: Maybe<PageableList_PageEntity>;
  getPublicAuthor?: Maybe<PublicAuthorEntity>;
  getPublicAuthors?: Maybe<PageableList_PublicAuthorEntity>;
  getQuestion?: Maybe<QuestionEntity>;
  getQuestionOption?: Maybe<QuestionOptionEntity>;
  getQuestionOptions?: Maybe<PageableList_QuestionOptionEntity>;
  getQuestionType?: Maybe<QuestionTypeEntity>;
  getQuestionTypes?: Maybe<PageableList_QuestionTypeEntity>;
  getQuestions?: Maybe<PageableList_QuestionEntity>;
  getReport?: Maybe<ReportEntity>;
  getReportType?: Maybe<ReportTypeEntity>;
  getReportTypes?: Maybe<PageableList_ReportTypeEntity>;
  getReports?: Maybe<PageableList_ReportEntity>;
  getRole?: Maybe<RoleEntity>;
  getRoles?: Maybe<PageableList_RoleEntity>;
  getSchedule?: Maybe<ScheduleEntity>;
  getSchedules?: Maybe<PageableList_ScheduleEntity>;
  getSocialMedia?: Maybe<SocialMediaEntity>;
  getSocialMedias?: Maybe<PageableList_SocialMediaEntity>;
  getSubscription?: Maybe<SubscriptionEntity>;
  getSubscriptions?: Maybe<PageableList_SubscriptionEntity>;
  getSuburb?: Maybe<SuburbEntity>;
  getSuburbs?: Maybe<PageableList_SuburbEntity>;
  getSurvey?: Maybe<SurveyEntity>;
  getSurveyResult?: Maybe<SurveyResultEntity>;
  getSurveyResults?: Maybe<PageableList_SurveyResultEntity>;
  getSurveyState?: Maybe<SurveyStateEntity>;
  getSurveyStates?: Maybe<PageableList_SurveyStateEntity>;
  getSurveys?: Maybe<PageableList_SurveyEntity>;
  getTheme?: Maybe<ThemeEntity>;
  getThemes?: Maybe<PageableList_ThemeEntity>;
  getUser?: Maybe<UserEntity>;
  getUserContext?: Maybe<UserContextEntity>;
  getUserContexts?: Maybe<PageableList_UserContextEntity>;
  getUsers?: Maybe<PageableList_UserEntity>;
  me?: Maybe<UserContextEntity>;
  search?: Maybe<Array<Maybe<SearchDto>>>;
};


/** Query root */
export type QueryGetAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
};


/** Query root */
export type QueryGetAddressesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAnswerArgs = {
  entity?: InputMaybe<AnswerEntityInput>;
};


/** Query root */
export type QueryGetAnswersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAppArgs = {
  entity?: InputMaybe<AppEntityInput>;
};


/** Query root */
export type QueryGetAppsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetArticleArgs = {
  entity?: InputMaybe<ArticleEntityInput>;
};


/** Query root */
export type QueryGetArticleCategoriesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetArticleCategoryArgs = {
  entity?: InputMaybe<ArticleCategoryEntityInput>;
};


/** Query root */
export type QueryGetArticleCommentArgs = {
  entity?: InputMaybe<ArticleCommentEntityInput>;
};


/** Query root */
export type QueryGetArticleCommentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetArticleRatingArgs = {
  entity?: InputMaybe<ArticleRatingEntityInput>;
};


/** Query root */
export type QueryGetArticleRatingsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetArticlesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAssignmentArgs = {
  entity?: InputMaybe<AssignmentEntityInput>;
};


/** Query root */
export type QueryGetAssignmentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAttendeeArgs = {
  entity?: InputMaybe<AttendeeEntityInput>;
};


/** Query root */
export type QueryGetAttendeesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetConfigurationArgs = {
  entity?: InputMaybe<ConfigurationEntityInput>;
};


/** Query root */
export type QueryGetConfigurationsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetContactArgs = {
  entity?: InputMaybe<ContactEntityInput>;
};


/** Query root */
export type QueryGetContactsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetContestArgs = {
  entity?: InputMaybe<ContestEntityInput>;
};


/** Query root */
export type QueryGetContestTypeArgs = {
  entity?: InputMaybe<ContestTypeEntityInput>;
};


/** Query root */
export type QueryGetContestTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetContestVoteArgs = {
  entity?: InputMaybe<ContestVoteEntityInput>;
};


/** Query root */
export type QueryGetContestVotesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetContestsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetDealArgs = {
  entity?: InputMaybe<DealEntityInput>;
};


/** Query root */
export type QueryGetDealCategoriesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetDealCategoryArgs = {
  entity?: InputMaybe<DealCategoryEntityInput>;
};


/** Query root */
export type QueryGetDealsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetErrorMessageArgs = {
  entity?: InputMaybe<ErrorMessageEntityInput>;
};


/** Query root */
export type QueryGetErrorMessagesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventArgs = {
  entity?: InputMaybe<EventEntityInput>;
};


/** Query root */
export type QueryGetEventCategoriesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventCategoryArgs = {
  entity?: InputMaybe<EventCategoryEntityInput>;
};


/** Query root */
export type QueryGetEventCommentArgs = {
  entity?: InputMaybe<EventCommentEntityInput>;
};


/** Query root */
export type QueryGetEventCommentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventRatingArgs = {
  entity?: InputMaybe<EventRatingEntityInput>;
};


/** Query root */
export type QueryGetEventRatingsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventTargetGroupArgs = {
  entity?: InputMaybe<EventTargetGroupEntityInput>;
};


/** Query root */
export type QueryGetEventTargetGroupsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetLabelArgs = {
  entity?: InputMaybe<LabelEntityInput>;
};


/** Query root */
export type QueryGetLabelsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetLanguageArgs = {
  entity?: InputMaybe<LanguageEntityInput>;
};


/** Query root */
export type QueryGetLanguagesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetMemberArgs = {
  entity?: InputMaybe<MemberEntityInput>;
};


/** Query root */
export type QueryGetMembersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetMenuItemArgs = {
  entity?: InputMaybe<MenuItemEntityInput>;
};


/** Query root */
export type QueryGetMenuItemsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetMessageDefinitionArgs = {
  entity?: InputMaybe<MessageDefinitionEntityInput>;
};


/** Query root */
export type QueryGetMessageDefinitionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetMessageTemplateArgs = {
  entity?: InputMaybe<MessageTemplateEntityInput>;
};


/** Query root */
export type QueryGetMessageTemplatesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetNotificationArgs = {
  entity?: InputMaybe<NotificationEntityInput>;
};


/** Query root */
export type QueryGetNotificationsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetOrganisationArgs = {
  entity?: InputMaybe<OrganisationEntityInput>;
};


/** Query root */
export type QueryGetOrganisationCommentArgs = {
  entity?: InputMaybe<OrganisationCommentEntityInput>;
};


/** Query root */
export type QueryGetOrganisationCommentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetOrganisationRatingArgs = {
  entity?: InputMaybe<OrganisationRatingEntityInput>;
};


/** Query root */
export type QueryGetOrganisationRatingsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetOrganisationsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetPageArgs = {
  entity?: InputMaybe<PageEntityInput>;
};


/** Query root */
export type QueryGetPagesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetPublicAuthorArgs = {
  entity?: InputMaybe<PublicAuthorEntityInput>;
};


/** Query root */
export type QueryGetPublicAuthorsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionArgs = {
  entity?: InputMaybe<QuestionEntityInput>;
};


/** Query root */
export type QueryGetQuestionOptionArgs = {
  entity?: InputMaybe<QuestionOptionEntityInput>;
};


/** Query root */
export type QueryGetQuestionOptionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionTypeArgs = {
  entity?: InputMaybe<QuestionTypeEntityInput>;
};


/** Query root */
export type QueryGetQuestionTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetReportArgs = {
  entity?: InputMaybe<ReportEntityInput>;
};


/** Query root */
export type QueryGetReportTypeArgs = {
  entity?: InputMaybe<ReportTypeEntityInput>;
};


/** Query root */
export type QueryGetReportTypesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetReportsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetRoleArgs = {
  entity?: InputMaybe<RoleEntityInput>;
};


/** Query root */
export type QueryGetRolesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetScheduleArgs = {
  entity?: InputMaybe<ScheduleEntityInput>;
};


/** Query root */
export type QueryGetSchedulesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSocialMediaArgs = {
  entity?: InputMaybe<SocialMediaEntityInput>;
};


/** Query root */
export type QueryGetSocialMediasArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSubscriptionArgs = {
  entity?: InputMaybe<SubscriptionEntityInput>;
};


/** Query root */
export type QueryGetSubscriptionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSuburbArgs = {
  entity?: InputMaybe<SuburbEntityInput>;
};


/** Query root */
export type QueryGetSuburbsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSurveyArgs = {
  entity?: InputMaybe<SurveyEntityInput>;
};


/** Query root */
export type QueryGetSurveyResultArgs = {
  entity?: InputMaybe<SurveyResultEntityInput>;
};


/** Query root */
export type QueryGetSurveyResultsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSurveyStateArgs = {
  entity?: InputMaybe<SurveyStateEntityInput>;
};


/** Query root */
export type QueryGetSurveyStatesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSurveysArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetThemeArgs = {
  entity?: InputMaybe<ThemeEntityInput>;
};


/** Query root */
export type QueryGetThemesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetUserArgs = {
  entity?: InputMaybe<UserEntityInput>;
};


/** Query root */
export type QueryGetUserContextArgs = {
  entity?: InputMaybe<UserContextEntityInput>;
};


/** Query root */
export type QueryGetUserContextsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetUsersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QuerySearchArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};

export type QueryConjunctionInput = {
  operands?: InputMaybe<Array<InputMaybe<QueryExpressionInput>>>;
  operator?: InputMaybe<ConjunctionOperator>;
};

export type QueryEntityInput = {
  operator?: InputMaybe<QueryOperator>;
  path?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type QueryExpressionInput = {
  conjunction?: InputMaybe<QueryConjunctionInput>;
  entity?: InputMaybe<QueryEntityInput>;
};

export enum QueryOperator {
  Equal = 'EQUAL',
  GreaterOrEqual = 'GREATER_OR_EQUAL',
  GreaterThan = 'GREATER_THAN',
  LessOrEqual = 'LESS_OR_EQUAL',
  LessThan = 'LESS_THAN',
  Like = 'LIKE',
  NotEqual = 'NOT_EQUAL'
}

export type QuestionEntity = {
  __typename?: 'QuestionEntity';
  answers?: Maybe<Array<Maybe<AnswerEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  order?: Maybe<Scalars['Int']>;
  questionOptions?: Maybe<Array<Maybe<QuestionOptionEntity>>>;
  subject?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<QuestionTranslatableEntity>>>;
  type?: Maybe<QuestionTypeEntity>;
};

export type QuestionEntityInput = {
  answers?: InputMaybe<Array<InputMaybe<AnswerEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  order?: InputMaybe<Scalars['Int']>;
  questionOptions?: InputMaybe<Array<InputMaybe<QuestionOptionEntityInput>>>;
  subject?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<QuestionTranslatableEntityInput>>>;
  type?: InputMaybe<QuestionTypeEntityInput>;
};

export type QuestionOptionEntity = {
  __typename?: 'QuestionOptionEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  order?: Maybe<Scalars['Int']>;
  question?: Maybe<QuestionEntity>;
  translatables?: Maybe<Array<Maybe<QuestionOptionTranslatableEntity>>>;
};

export type QuestionOptionEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  order?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<QuestionEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<QuestionOptionTranslatableEntityInput>>>;
};

export type QuestionOptionTranslatableEntity = {
  __typename?: 'QuestionOptionTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type QuestionOptionTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type QuestionTranslatableEntity = {
  __typename?: 'QuestionTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  subject?: Maybe<Scalars['String']>;
};

export type QuestionTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type QuestionTypeEntity = {
  __typename?: 'QuestionTypeEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  questions?: Maybe<Array<Maybe<QuestionEntity>>>;
};

export type QuestionTypeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  questions?: InputMaybe<Array<InputMaybe<QuestionEntityInput>>>;
};

export type RatingDto = {
  __typename?: 'RatingDto';
  average?: Maybe<Scalars['Float']>;
  distribution?: Maybe<Scalars['Map_Integer_DoubleScalar']>;
  total?: Maybe<Scalars['Int']>;
};

export type ReportEntity = {
  __typename?: 'ReportEntity';
  captchaToken?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<ReportTranslatableEntity>>>;
  type?: Maybe<ReportTypeEntity>;
  uploads?: Maybe<Array<Maybe<ReportMediaEntity>>>;
};

export type ReportEntityInput = {
  captchaToken?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<ReportTranslatableEntityInput>>>;
  type?: InputMaybe<ReportTypeEntityInput>;
  uploads?: InputMaybe<Array<InputMaybe<ReportMediaEntityInput>>>;
};

export type ReportMediaEntity = {
  __typename?: 'ReportMediaEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  report?: Maybe<ReportEntity>;
};

export type ReportMediaEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  report?: InputMaybe<ReportEntityInput>;
};

export type ReportTranslatableEntity = {
  __typename?: 'ReportTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type ReportTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type ReportTypeEntity = {
  __typename?: 'ReportTypeEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  reports?: Maybe<Array<Maybe<ReportEntity>>>;
  translatables?: Maybe<Array<Maybe<ReportTypeTranslatableEntity>>>;
};

export type ReportTypeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<Array<InputMaybe<ReportEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<ReportTypeTranslatableEntityInput>>>;
};

export type ReportTypeTranslatableEntity = {
  __typename?: 'ReportTypeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ReportTypeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RoleEntity = {
  __typename?: 'RoleEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<RoleTranslatableEntity>>>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type RoleEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<RoleTranslatableEntityInput>>>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type RoleTranslatableEntity = {
  __typename?: 'RoleTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<RoleEntity>;
};

export type RoleTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<RoleEntityInput>;
};

export type ScheduleEntity = {
  __typename?: 'ScheduleEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  endDate?: Maybe<Scalars['OffsetDateTime']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  startDate?: Maybe<Scalars['OffsetDateTime']>;
};

export type ScheduleEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  endDate?: InputMaybe<Scalars['OffsetDateTime']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type SearchDto = {
  __typename?: 'SearchDto';
  feature?: Maybe<FeatureEntity>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SocialMediaEntity = {
  __typename?: 'SocialMediaEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SocialMediaEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Subscription root */
export type Subscription = {
  __typename?: 'Subscription';
  addChatListener?: Maybe<MessageDto>;
  addListener?: Maybe<MessageDto>;
};


/** Subscription root */
export type SubscriptionAddChatListenerArgs = {
  token?: InputMaybe<Scalars['String']>;
};


/** Subscription root */
export type SubscriptionAddListenerArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type SubscriptionEntity = {
  __typename?: 'SubscriptionEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  deviceToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  user?: Maybe<UserEntity>;
};

export type SubscriptionEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  deviceToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  user?: InputMaybe<UserEntityInput>;
};

export type SuburbEntity = {
  __typename?: 'SuburbEntity';
  addresses?: Maybe<Array<Maybe<AddressEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type SuburbEntityInput = {
  addresses?: InputMaybe<Array<InputMaybe<AddressEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SurveyEntity = {
  __typename?: 'SurveyEntity';
  assignments?: Maybe<Array<Maybe<AssignmentEntity>>>;
  contact?: Maybe<ContactEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  mandatory?: Maybe<Scalars['Boolean']>;
  metaDescription?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['OffsetDateTime']>;
  state?: Maybe<SurveyStateEntity>;
  translatables?: Maybe<Array<Maybe<SurveyTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<SurveyMediaEntity>>>;
  visitors?: Maybe<Array<Maybe<SurveyVisitorEntity>>>;
};

export type SurveyEntityInput = {
  assignments?: InputMaybe<Array<InputMaybe<AssignmentEntityInput>>>;
  contact?: InputMaybe<ContactEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  mandatory?: InputMaybe<Scalars['Boolean']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sponsored?: InputMaybe<Scalars['Boolean']>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']>;
  state?: InputMaybe<SurveyStateEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<SurveyMediaEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<SurveyVisitorEntityInput>>>;
};

export type SurveyMediaEntity = {
  __typename?: 'SurveyMediaEntity';
  card?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  survey?: Maybe<SurveyEntity>;
  title?: Maybe<Scalars['Boolean']>;
};

export type SurveyMediaEntityInput = {
  card?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  survey?: InputMaybe<SurveyEntityInput>;
  title?: InputMaybe<Scalars['Boolean']>;
};

export type SurveyResultEntity = {
  __typename?: 'SurveyResultEntity';
  answer?: Maybe<Array<Maybe<AnswerEntity>>>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  survey?: Maybe<SurveyEntity>;
  translatables?: Maybe<Array<Maybe<SurveyResultTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type SurveyResultEntityInput = {
  answer?: InputMaybe<Array<InputMaybe<AnswerEntityInput>>>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  survey?: InputMaybe<SurveyEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyResultTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type SurveyResultTranslatableEntity = {
  __typename?: 'SurveyResultTranslatableEntity';
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type SurveyResultTranslatableEntityInput = {
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type SurveyStateEntity = {
  __typename?: 'SurveyStateEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  survey?: Maybe<Array<Maybe<SurveyEntity>>>;
};

export type SurveyStateEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  survey?: InputMaybe<Array<InputMaybe<SurveyEntityInput>>>;
};

export type SurveyTranslatableEntity = {
  __typename?: 'SurveyTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type SurveyTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SurveyVisitorEntity = {
  __typename?: 'SurveyVisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<SurveyEntity>;
  visitor?: Maybe<VisitorEntity>;
  visits?: Maybe<Scalars['Int']>;
};

export type SurveyVisitorEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  visits?: InputMaybe<Scalars['Int']>;
};

export type ThemeEntity = {
  __typename?: 'ThemeEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  variables?: Maybe<Array<Maybe<ThemeVariableEntity>>>;
};

export type ThemeEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  variables?: InputMaybe<Array<InputMaybe<ThemeVariableEntityInput>>>;
};

export type ThemeVariableEntity = {
  __typename?: 'ThemeVariableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  theme?: Maybe<ThemeEntity>;
  value?: Maybe<Scalars['String']>;
};

export type ThemeVariableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  theme?: InputMaybe<ThemeEntityInput>;
  value?: InputMaybe<Scalars['String']>;
};

export type TokenDto = {
  __typename?: 'TokenDto';
  access?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['String']>;
};

export type UserContextEntity = {
  __typename?: 'UserContextEntity';
  address?: Maybe<AddressEntity>;
  articleRatings?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  articles?: Maybe<Array<Maybe<ArticleEntity>>>;
  assignments?: Maybe<Array<Maybe<AssignmentEntity>>>;
  attendedEvents?: Maybe<Array<Maybe<AttendeeEntity>>>;
  contacts?: Maybe<Array<Maybe<ContactEntity>>>;
  contestPariticpations?: Maybe<Array<Maybe<ContestParticipationEntity>>>;
  contestVotes?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  deals?: Maybe<Array<Maybe<DealEntity>>>;
  description?: Maybe<Scalars['String']>;
  eventComment?: Maybe<Array<Maybe<EventCommentEntity>>>;
  eventRatings?: Maybe<Array<Maybe<EventRatingEntity>>>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  favoriteEvents?: Maybe<Array<Maybe<EventEntity>>>;
  favoriteOffers?: Maybe<Array<Maybe<EventEntity>>>;
  favoriteOrganisations?: Maybe<Array<Maybe<OrganisationEntity>>>;
  friendAddressee?: Maybe<Array<Maybe<FriendEntity>>>;
  friendRequester?: Maybe<Array<Maybe<FriendEntity>>>;
  id?: Maybe<Scalars['String']>;
  member?: Maybe<Array<Maybe<MemberEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisationRatings?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  slug?: Maybe<Scalars['String']>;
  surveyResults?: Maybe<Array<Maybe<SurveyResultEntity>>>;
  translatables?: Maybe<Array<Maybe<UserContextTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<UserContextMediaEntity>>>;
  user?: Maybe<UserEntity>;
  userFormTemplate?: Maybe<Array<Maybe<UserFormTemplateEntity>>>;
};

export type UserContextEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  articleRatings?: InputMaybe<Array<InputMaybe<ArticleRatingEntityInput>>>;
  articles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  assignments?: InputMaybe<Array<InputMaybe<AssignmentEntityInput>>>;
  attendedEvents?: InputMaybe<Array<InputMaybe<AttendeeEntityInput>>>;
  contacts?: InputMaybe<Array<InputMaybe<ContactEntityInput>>>;
  contestPariticpations?: InputMaybe<Array<InputMaybe<ContestParticipationEntityInput>>>;
  contestVotes?: InputMaybe<Array<InputMaybe<ContestVoteEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  deals?: InputMaybe<Array<InputMaybe<DealEntityInput>>>;
  description?: InputMaybe<Scalars['String']>;
  eventComment?: InputMaybe<Array<InputMaybe<EventCommentEntityInput>>>;
  eventRatings?: InputMaybe<Array<InputMaybe<EventRatingEntityInput>>>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoriteEvents?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoriteOffers?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoriteOrganisations?: InputMaybe<Array<InputMaybe<OrganisationEntityInput>>>;
  friendAddressee?: InputMaybe<Array<InputMaybe<FriendEntityInput>>>;
  friendRequester?: InputMaybe<Array<InputMaybe<FriendEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<Array<InputMaybe<MemberEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisationRatings?: InputMaybe<Array<InputMaybe<OrganisationRatingEntityInput>>>;
  slug?: InputMaybe<Scalars['String']>;
  surveyResults?: InputMaybe<Array<InputMaybe<SurveyResultEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<UserContextTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<UserContextMediaEntityInput>>>;
  user?: InputMaybe<UserEntityInput>;
  userFormTemplate?: InputMaybe<Array<InputMaybe<UserFormTemplateEntityInput>>>;
};

export type UserContextMediaEntity = {
  __typename?: 'UserContextMediaEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  profilePicture?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['Boolean']>;
  userContext?: Maybe<UserContextEntity>;
};

export type UserContextMediaEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  profilePicture?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['Boolean']>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type UserContextTranslatableEntity = {
  __typename?: 'UserContextTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type UserContextTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  captchaToken?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  notifications?: Maybe<Array<Maybe<NotificationEntity>>>;
  password?: Maybe<Scalars['String']>;
  passwordResets?: Maybe<Array<Maybe<PasswordResetEntity>>>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<RoleEntity>>>;
  subscriptions?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  termsAccepted?: Maybe<Scalars['Boolean']>;
  userContext?: Maybe<UserContextEntity>;
  verifications?: Maybe<Array<Maybe<VerificationEntity>>>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserEntityInput = {
  captchaToken?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  notifications?: InputMaybe<Array<InputMaybe<NotificationEntityInput>>>;
  password?: InputMaybe<Scalars['String']>;
  passwordResets?: InputMaybe<Array<InputMaybe<PasswordResetEntityInput>>>;
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<RoleEntityInput>>>;
  subscriptions?: InputMaybe<Array<InputMaybe<SubscriptionEntityInput>>>;
  termsAccepted?: InputMaybe<Scalars['Boolean']>;
  userContext?: InputMaybe<UserContextEntityInput>;
  verifications?: InputMaybe<Array<InputMaybe<VerificationEntityInput>>>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

export type UserFormTemplateEntity = {
  __typename?: 'UserFormTemplateEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<UserFormTemplateTranslatableEntity>>>;
  type?: Maybe<FormTemplateTypeEntity>;
  userContext?: Maybe<UserContextEntity>;
};

export type UserFormTemplateEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<UserFormTemplateTranslatableEntityInput>>>;
  type?: InputMaybe<FormTemplateTypeEntityInput>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type UserFormTemplateTranslatableEntity = {
  __typename?: 'UserFormTemplateTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type UserFormTemplateTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type VerificationEntity = {
  __typename?: 'VerificationEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<UserEntity>;
};

export type VerificationEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  token?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserEntityInput>;
};

export type VisitorEntity = {
  __typename?: 'VisitorEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  ipAddress?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  userAgent?: Maybe<Scalars['String']>;
};

export type AddressFragment = { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null };

export type AppFragment = { __typename?: 'AppEntity', id?: string | null, url?: string | null, platform?: { __typename?: 'AppPlatformEntity', id?: string | null, key?: string | null, name?: string | null } | null };

export type ArticleCategoryFragment = { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type ArticleCommentFragment = { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type ArticleFragment = { __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type ConfigurationFragment = { __typename?: 'ConfigurationEntity', id?: string | null, key?: string | null, value?: string | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null };

export type ContactFragment = { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null };

export type ContestTypeFragment = { __typename?: 'ContestTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type ContestFragment = { __typename?: 'ContestEntity', id?: string | null, modified?: any | null, created?: any | null, participationEndDate?: any | null, voteEndDate?: any | null, slug?: string | null, uploads?: Array<{ __typename?: 'ContestMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, type?: { __typename?: 'ContestTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'ContestTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null };

export type DealCategoryFragment = { __typename?: 'DealCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, created?: any | null, translatables?: Array<{ __typename?: 'DealCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type DealFragment = { __typename?: 'DealEntity', id?: string | null, created?: any | null, price?: number | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, creator?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, uploads?: Array<{ __typename?: 'DealMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, category?: { __typename?: 'DealCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, created?: any | null, translatables?: Array<{ __typename?: 'DealCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'DealTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type EventCategoryFragment = { __typename?: 'EventCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'EventCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type EventCommentFragment = { __typename?: 'EventCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, event?: { __typename?: 'EventEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'EventCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type EventTargetGroupFragment = { __typename?: 'EventTargetGroupEntity', id?: string | null, translatables?: Array<{ __typename?: 'EventTargetGroupTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type EventFragment = { __typename?: 'EventEntity', id?: string | null, entryFee?: number | null, hasSchedules?: boolean | null, slug?: string | null, videoChatLink?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, attendeeConfiguration?: { __typename?: 'AttendeeConfigurationEntity', approval?: boolean | null, maxAttendees?: number | null, attendees?: Array<{ __typename?: 'AttendeeEntity', id?: string | null, approved?: boolean | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'EventCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, lastEventComment?: { __typename?: 'EventCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, event?: { __typename?: 'EventEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'EventCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, lastOrganisationComment?: { __typename?: 'OrganisationCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'OrganisationCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, members?: Array<{ __typename?: 'MemberEntity', approved?: boolean | null, admin?: boolean | null, isPublic?: boolean | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null } | null> | null, translatables?: Array<{ __typename?: 'OrganisationTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null } | null, ratings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null> | null, schedule?: { __typename?: 'ScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null, translatables?: Array<{ __typename?: 'EventTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'EventMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null };

export type FormFragment = { __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type FriendFragment = { __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null };

export type LabelFragment = { __typename?: 'LabelEntity', id?: string | null, tagId?: string | null, translatables?: Array<{ __typename?: 'LabelTranslatablesEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type LanguageFragment = { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null };

export type MediaFragment = { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null };

export type MenuItemFragment = { __typename?: 'MenuItemEntity', id?: string | null, header?: boolean | null, order?: number | null, icon?: string | null, feature?: { __typename?: 'FeatureEntity', id?: string | null, key?: string | null } | null, parent?: { __typename?: 'MenuItemEntity', id?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null } | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, order?: number | null, icon?: string | null, feature?: { __typename?: 'FeatureEntity', id?: string | null, key?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null } | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null } | null> | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null };

export type NotificationFragment = { __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type OrganisationCommentFragment = { __typename?: 'OrganisationCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'OrganisationCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type OrganisationFragment = { __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, lastOrganisationComment?: { __typename?: 'OrganisationCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'OrganisationCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, members?: Array<{ __typename?: 'MemberEntity', approved?: boolean | null, admin?: boolean | null, isPublic?: boolean | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null } | null> | null, translatables?: Array<{ __typename?: 'OrganisationTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null };

export type PageFragment = { __typename?: 'PageEntity', id?: string | null, callUrl?: string | null, slug?: string | null, uploads?: Array<{ __typename?: 'PageMediaEntity', title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, pageFeatures?: Array<{ __typename?: 'PageFeatureEntity', id?: string | null, order?: number | null, feature?: { __typename?: 'FeatureEntity', id?: string | null, key?: string | null } | null } | null> | null, translatables?: Array<{ __typename?: 'PageTranslatableEntity', id?: string | null, callText?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null };

export type PublicAuthorFragment = { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null };

export type RatingDtoFragment = { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null };

export type ReportFragment = { __typename?: 'ReportEntity', id?: string | null, name?: string | null, email?: string | null, captchaToken?: string | null, translatables?: Array<{ __typename?: 'ReportTranslatableEntity', id?: string | null, content?: string | null } | null> | null, type?: { __typename?: 'ReportTypeEntity', id?: string | null } | null };

export type ScheduleFragment = { __typename?: 'ScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null };

export type SocialMediaFragment = { __typename?: 'SocialMediaEntity', icon?: string | null, name?: string | null, url?: string | null };

export type SuburbFragment = { __typename?: 'SuburbEntity', id?: string | null, name?: string | null };

export type SurveyFragment = { __typename?: 'SurveyEntity', id?: string | null, name?: string | null, slug?: string | null, dueDate?: any | null, startDate?: any | null, uploads?: Array<{ __typename?: 'SurveyMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, translatables?: Array<{ __typename?: 'SurveyTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null };

export type ThemeFragment = { __typename?: 'ThemeEntity', id?: string | null, isDefault?: boolean | null, name?: string | null, variables?: Array<{ __typename?: 'ThemeVariableEntity', id?: string | null, key?: string | null, value?: string | null } | null> | null };

export type UserContextAuthorFragment = { __typename?: 'UserContextEntity', id?: string | null, description?: string | null, slug?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null, email?: string | null } | null };

export type UserContextFragment = { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null };

export type UserFragment = { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null };

export type CheckPasswordMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']>;
}>;


export type CheckPasswordMutation = { __typename?: 'Mutation', checkPassword?: number | null };

export type DeleteAttendeeMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteAttendeeMutation = { __typename?: 'Mutation', deleteAttendee?: boolean | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', createToken?: { __typename?: 'TokenDto', access?: string | null, refresh?: string | null } | null };

export type RefreshMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;


export type RefreshMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'TokenDto', access?: string | null, refresh?: string | null } | null };

export type ResetPasswordMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: boolean | null };

export type SaveArticleRatingMutationVariables = Exact<{
  entity: ArticleRatingEntityInput;
}>;


export type SaveArticleRatingMutation = { __typename?: 'Mutation', saveArticleRating?: { __typename?: 'ArticleRatingEntity', score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null };

export type SaveArticleMutationVariables = Exact<{
  entity: ArticleEntityInput;
}>;


export type SaveArticleMutation = { __typename?: 'Mutation', saveArticle?: { __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export type SaveAttendeeMutationVariables = Exact<{
  entity: AttendeeEntityInput;
}>;


export type SaveAttendeeMutation = { __typename?: 'Mutation', saveAttendee?: { __typename?: 'AttendeeEntity', id?: string | null } | null };

export type SaveArticleCommentMutationVariables = Exact<{
  entity: ArticleCommentEntityInput;
}>;


export type SaveArticleCommentMutation = { __typename?: 'Mutation', saveArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export type SaveEventCommentMutationVariables = Exact<{
  entity: EventCommentEntityInput;
}>;


export type SaveEventCommentMutation = { __typename?: 'Mutation', saveEventComment?: { __typename?: 'EventCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, event?: { __typename?: 'EventEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'EventCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export type SaveEventRatingMutationVariables = Exact<{
  entity: EventRatingEntityInput;
}>;


export type SaveEventRatingMutation = { __typename?: 'Mutation', saveEventRating?: { __typename?: 'EventRatingEntity', score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null };

export type SaveNotificationsMutationVariables = Exact<{
  entities?: InputMaybe<Array<NotificationEntityInput> | NotificationEntityInput>;
}>;


export type SaveNotificationsMutation = { __typename?: 'Mutation', saveNotifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null };

export type SaveOrganisationCommentMutationVariables = Exact<{
  entity: OrganisationCommentEntityInput;
}>;


export type SaveOrganisationCommentMutation = { __typename?: 'Mutation', saveOrganisationComment?: { __typename?: 'OrganisationCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'OrganisationCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export type SaveOrganisationRatingMutationVariables = Exact<{
  entity: OrganisationRatingEntityInput;
}>;


export type SaveOrganisationRatingMutation = { __typename?: 'Mutation', saveOrganisationRating?: { __typename?: 'OrganisationRatingEntity', score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null };

export type SaveReportMutationVariables = Exact<{
  entity: ReportEntityInput;
}>;


export type SaveReportMutation = { __typename?: 'Mutation', saveReport?: { __typename?: 'ReportEntity', id?: string | null, name?: string | null, email?: string | null, captchaToken?: string | null, translatables?: Array<{ __typename?: 'ReportTranslatableEntity', id?: string | null, content?: string | null } | null> | null, type?: { __typename?: 'ReportTypeEntity', id?: string | null } | null } | null };

export type SaveUserMutationVariables = Exact<{
  entity: UserContextEntityInput;
}>;


export type SaveUserMutation = { __typename?: 'Mutation', saveUserContext?: { __typename?: 'UserContextEntity', user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null };

export type SendPasswordResetMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;


export type SendPasswordResetMutation = { __typename?: 'Mutation', sendPasswordReset?: boolean | null };

export type SendVerificationMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;


export type SendVerificationMutation = { __typename?: 'Mutation', sendVerification?: boolean | null };

export type GetAppsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAppsQuery = { __typename?: 'Query', getApps?: { __typename?: 'PageableList_AppEntity', result?: Array<{ __typename?: 'AppEntity', id?: string | null, url?: string | null, platform?: { __typename?: 'AppPlatformEntity', id?: string | null, key?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetArticleCategoriesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetArticleCategoriesQuery = { __typename?: 'Query', getArticleCategories?: { __typename?: 'PageableList_ArticleCategoryEntity', result?: Array<{ __typename?: 'ArticleCategoryEntity', color?: string | null, icon?: string | null, id?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, name?: string | null, locale?: string | null } | null } | null> | null } | null> | null } | null };

export type GetArticleCommentsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetArticleCommentsQuery = { __typename?: 'Query', getArticleComments?: { __typename?: 'PageableList_ArticleCommentEntity', result?: Array<{ __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetArticleQueryVariables = Exact<{
  entity?: InputMaybe<ArticleEntityInput>;
}>;


export type GetArticleQuery = { __typename?: 'Query', getArticle?: { __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetArticlesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetArticlesQuery = { __typename?: 'Query', getArticles?: { __typename?: 'PageableList_ArticleEntity', total: any, result?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetConfigurationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConfigurationsQuery = { __typename?: 'Query', getConfigurations?: { __typename?: 'PageableList_ConfigurationEntity', result?: Array<{ __typename?: 'ConfigurationEntity', id?: string | null, key?: string | null, value?: string | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null } | null };

export type GetContestTypesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetContestTypesQuery = { __typename?: 'Query', getContestTypes?: { __typename?: 'PageableList_ContestTypeEntity', result?: Array<{ __typename?: 'ContestTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, name?: string | null, locale?: string | null } | null } | null> | null } | null> | null } | null };

export type GetContestQueryVariables = Exact<{
  entity?: InputMaybe<ContestEntityInput>;
}>;


export type GetContestQuery = { __typename?: 'Query', getContest?: { __typename?: 'ContestEntity', id?: string | null, modified?: any | null, created?: any | null, participationEndDate?: any | null, voteEndDate?: any | null, slug?: string | null, uploads?: Array<{ __typename?: 'ContestMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, type?: { __typename?: 'ContestTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'ContestTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null } | null };

export type GetContestsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetContestsQuery = { __typename?: 'Query', getContests?: { __typename?: 'PageableList_ContestEntity', total: any, result?: Array<{ __typename?: 'ContestEntity', id?: string | null, modified?: any | null, created?: any | null, participationEndDate?: any | null, voteEndDate?: any | null, slug?: string | null, uploads?: Array<{ __typename?: 'ContestMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, type?: { __typename?: 'ContestTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'ContestTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'ContestTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null } | null> | null } | null };

export type GetDealCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDealCategoriesQuery = { __typename?: 'Query', getDealCategories?: { __typename?: 'PageableList_DealCategoryEntity', result?: Array<{ __typename?: 'DealCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, created?: any | null, translatables?: Array<{ __typename?: 'DealCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetDealQueryVariables = Exact<{
  entity?: InputMaybe<DealEntityInput>;
}>;


export type GetDealQuery = { __typename?: 'Query', getDeal?: { __typename?: 'DealEntity', id?: string | null, created?: any | null, price?: number | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, creator?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, uploads?: Array<{ __typename?: 'DealMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, category?: { __typename?: 'DealCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, created?: any | null, translatables?: Array<{ __typename?: 'DealCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'DealTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetDealsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetDealsQuery = { __typename?: 'Query', getDeals?: { __typename?: 'PageableList_DealEntity', total: any, result?: Array<{ __typename?: 'DealEntity', id?: string | null, created?: any | null, price?: number | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, creator?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null } | null } | null, uploads?: Array<{ __typename?: 'DealMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, category?: { __typename?: 'DealCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, created?: any | null, translatables?: Array<{ __typename?: 'DealCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'DealTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetEventCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventCategoriesQuery = { __typename?: 'Query', getEventCategories?: { __typename?: 'PageableList_EventCategoryEntity', result?: Array<{ __typename?: 'EventCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'EventCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetEventCommentsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetEventCommentsQuery = { __typename?: 'Query', getEventComments?: { __typename?: 'PageableList_EventCommentEntity', result?: Array<{ __typename?: 'EventCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, event?: { __typename?: 'EventEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'EventCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetEventTargetGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventTargetGroupsQuery = { __typename?: 'Query', getEventTargetGroups?: { __typename?: 'PageableList_EventTargetGroupEntity', result?: Array<{ __typename?: 'EventTargetGroupEntity', id?: string | null, translatables?: Array<{ __typename?: 'EventTargetGroupTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetEventQueryVariables = Exact<{
  entity?: InputMaybe<EventEntityInput>;
  scheduleBegin?: InputMaybe<Scalars['OffsetDateTime']>;
  scheduleEnd?: InputMaybe<Scalars['OffsetDateTime']>;
}>;


export type GetEventQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventEntity', id?: string | null, entryFee?: number | null, hasSchedules?: boolean | null, slug?: string | null, videoChatLink?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, attendeeConfiguration?: { __typename?: 'AttendeeConfigurationEntity', approval?: boolean | null, maxAttendees?: number | null, attendees?: Array<{ __typename?: 'AttendeeEntity', id?: string | null, approved?: boolean | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'EventCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, lastEventComment?: { __typename?: 'EventCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, event?: { __typename?: 'EventEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'EventCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, lastOrganisationComment?: { __typename?: 'OrganisationCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'OrganisationCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, members?: Array<{ __typename?: 'MemberEntity', approved?: boolean | null, admin?: boolean | null, isPublic?: boolean | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null } | null> | null, translatables?: Array<{ __typename?: 'OrganisationTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null } | null, ratings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null> | null, schedule?: { __typename?: 'ScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null, translatables?: Array<{ __typename?: 'EventTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'EventMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null } | null };

export type GetEventsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
  scheduleBegin?: InputMaybe<Scalars['OffsetDateTime']>;
  scheduleEnd?: InputMaybe<Scalars['OffsetDateTime']>;
}>;


export type GetEventsQuery = { __typename?: 'Query', getEvents?: { __typename?: 'PageableList_EventEntity', total: any, result?: Array<{ __typename?: 'EventEntity', id?: string | null, entryFee?: number | null, hasSchedules?: boolean | null, slug?: string | null, videoChatLink?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, attendeeConfiguration?: { __typename?: 'AttendeeConfigurationEntity', approval?: boolean | null, maxAttendees?: number | null, attendees?: Array<{ __typename?: 'AttendeeEntity', id?: string | null, approved?: boolean | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, category?: { __typename?: 'EventCategoryEntity', id?: string | null, color?: string | null, icon?: string | null, name?: string | null, translatables?: Array<{ __typename?: 'EventCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, lastEventComment?: { __typename?: 'EventCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, event?: { __typename?: 'EventEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'EventCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, lastOrganisationComment?: { __typename?: 'OrganisationCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'OrganisationCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, members?: Array<{ __typename?: 'MemberEntity', approved?: boolean | null, admin?: boolean | null, isPublic?: boolean | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null } | null> | null, translatables?: Array<{ __typename?: 'OrganisationTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null } | null, ratings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null } | null } | null> | null, schedule?: { __typename?: 'ScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null, translatables?: Array<{ __typename?: 'EventTranslatableEntity', id?: string | null, name?: string | null, content?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'EventMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null } | null> | null } | null };

export type GetLabelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLabelsQuery = { __typename?: 'Query', getLabels?: { __typename?: 'PageableList_LabelEntity', result?: Array<{ __typename?: 'LabelEntity', id?: string | null, tagId?: string | null, translatables?: Array<{ __typename?: 'LabelTranslatablesEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLanguagesQuery = { __typename?: 'Query', getLanguages?: { __typename?: 'PageableList_LanguageEntity', result?: Array<{ __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null> | null } | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetMenuQueryVariables = Exact<{
  parent?: InputMaybe<Scalars['String']>;
}>;


export type GetMenuQuery = { __typename?: 'Query', getMenuItems?: { __typename?: 'PageableList_MenuItemEntity', result?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, header?: boolean | null, order?: number | null, icon?: string | null, feature?: { __typename?: 'FeatureEntity', id?: string | null, key?: string | null } | null, parent?: { __typename?: 'MenuItemEntity', id?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null } | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null, order?: number | null, icon?: string | null, feature?: { __typename?: 'FeatureEntity', id?: string | null, key?: string | null } | null, page?: { __typename?: 'PageEntity', id?: string | null } | null, subMenuItems?: Array<{ __typename?: 'MenuItemEntity', id?: string | null } | null> | null, translatables?: Array<{ __typename?: 'MenuItemTranslatableEntity', id?: string | null, name?: string | null, shortDescription?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null> | null } | null };

export type GetNotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotificationsQuery = { __typename?: 'Query', getNotifications?: { __typename?: 'PageableList_NotificationEntity', result?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetOrganisationCommentsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetOrganisationCommentsQuery = { __typename?: 'Query', getOrganisationComments?: { __typename?: 'PageableList_OrganisationCommentEntity', result?: Array<{ __typename?: 'OrganisationCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'OrganisationCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetOrganisationQueryVariables = Exact<{
  entity?: InputMaybe<OrganisationEntityInput>;
}>;


export type GetOrganisationQuery = { __typename?: 'Query', getOrganisation?: { __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, lastOrganisationComment?: { __typename?: 'OrganisationCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'OrganisationCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, members?: Array<{ __typename?: 'MemberEntity', approved?: boolean | null, admin?: boolean | null, isPublic?: boolean | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null } | null> | null, translatables?: Array<{ __typename?: 'OrganisationTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null } | null };

export type GetOrganisationsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetOrganisationsQuery = { __typename?: 'Query', getOrganisations?: { __typename?: 'PageableList_OrganisationEntity', total: any, result?: Array<{ __typename?: 'OrganisationEntity', id?: string | null, name?: string | null, slug?: string | null, address?: { __typename?: 'AddressEntity', id?: string | null, houseNumber?: string | null, place?: string | null, postalCode?: string | null, street?: string | null, latitude?: number | null, longitude?: number | null, suburb?: { __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null } | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, lastOrganisationComment?: { __typename?: 'OrganisationCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, translatables?: Array<{ __typename?: 'OrganisationCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, members?: Array<{ __typename?: 'MemberEntity', approved?: boolean | null, admin?: boolean | null, isPublic?: boolean | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null } | null> | null, translatables?: Array<{ __typename?: 'OrganisationTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'OrganisationMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null } | null> | null } | null };

export type GetPageQueryVariables = Exact<{
  isLanding?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetPageQuery = { __typename?: 'Query', getPage?: { __typename?: 'PageEntity', id?: string | null, callUrl?: string | null, slug?: string | null, uploads?: Array<{ __typename?: 'PageMediaEntity', title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, pageFeatures?: Array<{ __typename?: 'PageFeatureEntity', id?: string | null, order?: number | null, feature?: { __typename?: 'FeatureEntity', id?: string | null, key?: string | null } | null } | null> | null, translatables?: Array<{ __typename?: 'PageTranslatableEntity', id?: string | null, callText?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null };

export type GetReportTypesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetReportTypesQuery = { __typename?: 'Query', getReportTypes?: { __typename?: 'PageableList_ReportTypeEntity', result?: Array<{ __typename?: 'ReportTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'ReportTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, name?: string | null, locale?: string | null } | null } | null> | null } | null> | null } | null };

export type GetSchedulesQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetSchedulesQuery = { __typename?: 'Query', getSchedules?: { __typename?: 'PageableList_ScheduleEntity', result?: Array<{ __typename?: 'ScheduleEntity', id?: string | null, startDate?: any | null, endDate?: any | null } | null> | null } | null };

export type GetSocialMediaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSocialMediaQuery = { __typename?: 'Query', getSocialMedias?: { __typename?: 'PageableList_SocialMediaEntity', result?: Array<{ __typename?: 'SocialMediaEntity', icon?: string | null, name?: string | null, url?: string | null } | null> | null } | null };

export type GetSuburbsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSuburbsQuery = { __typename?: 'Query', getSuburbs?: { __typename?: 'PageableList_SuburbEntity', result?: Array<{ __typename?: 'SuburbEntity', id?: string | null, name?: string | null } | null> | null } | null };

export type GetSurveyQueryVariables = Exact<{
  entity?: InputMaybe<SurveyEntityInput>;
}>;


export type GetSurveyQuery = { __typename?: 'Query', getSurvey?: { __typename?: 'SurveyEntity', id?: string | null, name?: string | null, slug?: string | null, dueDate?: any | null, startDate?: any | null, uploads?: Array<{ __typename?: 'SurveyMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, translatables?: Array<{ __typename?: 'SurveyTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null } | null };

export type GetSurveysQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetSurveysQuery = { __typename?: 'Query', getSurveys?: { __typename?: 'PageableList_SurveyEntity', total: any, result?: Array<{ __typename?: 'SurveyEntity', id?: string | null, name?: string | null, slug?: string | null, dueDate?: any | null, startDate?: any | null, uploads?: Array<{ __typename?: 'SurveyMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, translatables?: Array<{ __typename?: 'SurveyTranslatableEntity', id?: string | null, description?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null, contact?: { __typename?: 'ContactEntity', id?: string | null, email?: string | null, name?: string | null, phone?: string | null, preferredContact?: boolean | null, website?: string | null } | null } | null> | null } | null };

export type GetThemeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetThemeQuery = { __typename?: 'Query', getThemes?: { __typename?: 'PageableList_ThemeEntity', result?: Array<{ __typename?: 'ThemeEntity', id?: string | null, isDefault?: boolean | null, name?: string | null, variables?: Array<{ __typename?: 'ThemeVariableEntity', id?: string | null, key?: string | null, value?: string | null } | null> | null } | null> | null } | null };

export type GetUserContextAuthorQueryVariables = Exact<{
  entity?: InputMaybe<UserContextEntityInput>;
}>;


export type GetUserContextAuthorQuery = { __typename?: 'Query', getUserContext?: { __typename?: 'UserContextEntity', id?: string | null, description?: string | null, slug?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null, email?: string | null } | null } | null };

export type GetUserContextQueryVariables = Exact<{
  entity?: InputMaybe<UserContextEntityInput>;
}>;


export type GetUserContextQuery = { __typename?: 'Query', getUserContext?: { __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null };

export type GetUserContextsQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type GetUserContextsQuery = { __typename?: 'Query', getUserContexts?: { __typename?: 'PageableList_UserContextEntity', result?: Array<{ __typename?: 'UserContextEntity', id?: string | null, slug?: string | null, articles?: Array<{ __typename?: 'ArticleEntity', id?: string | null, approved?: boolean | null, created?: any | null, modified?: any | null, slug?: string | null, author?: { __typename?: 'UserContextEntity', slug?: string | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, lastArticleComment?: { __typename?: 'ArticleCommentEntity', id?: string | null, created?: any | null, modified?: any | null, content?: string | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null, userContext?: { __typename?: 'UserContextEntity', id?: string | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', firstName?: string | null, lastName?: string | null } | null } | null, translatables?: Array<{ __typename?: 'ArticleCommentTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, calculatedRatings?: { __typename?: 'RatingDto', average?: number | null, distribution?: any | null, total?: number | null } | null, uploads?: Array<{ __typename?: 'ArticleMediaEntity', title?: boolean | null, card?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, category?: { __typename?: 'ArticleCategoryEntity', id?: string | null, icon?: string | null, color?: string | null, translatables?: Array<{ __typename?: 'ArticleCategoryTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, publicAuthor?: { __typename?: 'PublicAuthorEntity', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null, translatables?: Array<{ __typename?: 'ArticleTranslatableEntity', id?: string | null, content?: string | null, shortDescription?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null, articleRatings?: Array<{ __typename?: 'ArticleRatingEntity', id?: string | null, score?: number | null, article?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null> | null, eventRatings?: Array<{ __typename?: 'EventRatingEntity', id?: string | null, score?: number | null, event?: { __typename?: 'EventEntity', id?: string | null } | null } | null> | null, friendRequester?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, friendAddressee?: Array<{ __typename?: 'FriendEntity', id?: string | null, accepted?: boolean | null, addressee?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null, requester?: { __typename?: 'UserContextEntity', id?: string | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null } | null } | null> | null, organisationRatings?: Array<{ __typename?: 'OrganisationRatingEntity', id?: string | null, score?: number | null, organisation?: { __typename?: 'OrganisationEntity', id?: string | null } | null } | null> | null, uploads?: Array<{ __typename?: 'UserContextMediaEntity', profilePicture?: boolean | null, title?: boolean | null, media?: { __typename?: 'MediaEntity', id?: string | null, credits?: string | null, extension?: string | null, mimeType?: string | null, name?: string | null, size?: any | null } | null } | null> | null, user?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, notifications?: Array<{ __typename?: 'NotificationEntity', id?: string | null, read?: boolean | null, modified?: any | null, translatables?: Array<{ __typename?: 'NotificationTranslatableEntity', content?: string | null, id?: string | null, title?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null, userFormTemplate?: Array<{ __typename?: 'UserFormTemplateEntity', id?: string | null, modified?: any | null, name?: string | null, type?: { __typename?: 'FormTemplateTypeEntity', id?: string | null, translatables?: Array<{ __typename?: 'FormTemplateTypeTranslatableEntity', id?: string | null, name?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null, translatables?: Array<{ __typename?: 'UserFormTemplateTranslatableEntity', id?: string | null, content?: string | null, language?: { __typename?: 'LanguageEntity', id?: string | null, locale?: string | null, name?: string | null } | null } | null> | null } | null> | null } | null> | null } | null };

export type SearchQueryVariables = Exact<{
  params?: InputMaybe<FilterSortPaginateInput>;
}>;


export type SearchQuery = { __typename?: 'Query', search?: Array<{ __typename?: 'SearchDto', slug?: string | null, feature?: { __typename?: 'FeatureEntity', id?: string | null, key?: string | null } | null } | null> | null };

export type GetServerVersionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetServerVersionQuery = { __typename?: 'Query', getInformation?: { __typename?: 'InformationDto', version?: string | null } | null };

export type VerifyUserMutationVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
}>;


export type VerifyUserMutation = { __typename?: 'Mutation', verify?: { __typename?: 'UserEntity', id?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, verified?: boolean | null } | null };

export const AppFragmentDoc = gql`
    fragment App on AppEntity {
  id
  url
  platform {
    id
    key
    name
  }
}
    `;
export const MediaFragmentDoc = gql`
    fragment Media on MediaEntity {
  id
  credits
  extension
  mimeType
  name
  size
}
    `;
export const ConfigurationFragmentDoc = gql`
    fragment Configuration on ConfigurationEntity {
  id
  key
  value
  media {
    ...Media
  }
}
    ${MediaFragmentDoc}`;
export const LanguageFragmentDoc = gql`
    fragment Language on LanguageEntity {
  id
  locale
  name
}
    `;
export const ContestTypeFragmentDoc = gql`
    fragment ContestType on ContestTypeEntity {
  id
  translatables {
    id
    name
    language {
      ...Language
    }
  }
}
    ${LanguageFragmentDoc}`;
export const ContactFragmentDoc = gql`
    fragment Contact on ContactEntity {
  id
  email
  name
  phone
  preferredContact
  website
}
    `;
export const ContestFragmentDoc = gql`
    fragment Contest on ContestEntity {
  id
  modified
  created
  participationEndDate
  voteEndDate
  uploads {
    title
    card
    media {
      ...Media
    }
  }
  created
  modified
  type {
    ...ContestType
  }
  slug
  translatables {
    id
    name
    content
    shortDescription
    language {
      id
      locale
      name
    }
  }
  contact {
    ...Contact
  }
}
    ${MediaFragmentDoc}
${ContestTypeFragmentDoc}
${ContactFragmentDoc}`;
export const SuburbFragmentDoc = gql`
    fragment Suburb on SuburbEntity {
  id
  name
}
    `;
export const AddressFragmentDoc = gql`
    fragment Address on AddressEntity {
  id
  houseNumber
  place
  postalCode
  street
  latitude
  longitude
  suburb {
    ...Suburb
  }
}
    ${SuburbFragmentDoc}`;
export const DealCategoryFragmentDoc = gql`
    fragment DealCategory on DealCategoryEntity {
  id
  color
  icon
  created
  color
  icon
  translatables {
    id
    name
    language {
      ...Language
    }
  }
}
    ${LanguageFragmentDoc}`;
export const DealFragmentDoc = gql`
    fragment Deal on DealEntity {
  id
  created
  price
  slug
  address {
    ...Address
  }
  creator {
    id
    user {
      id
      firstName
      lastName
    }
  }
  uploads {
    title
    card
    media {
      ...Media
    }
  }
  contact {
    ...Contact
  }
  category {
    ...DealCategory
  }
  translatables {
    id
    content
    shortDescription
    name
    language {
      id
      locale
      name
    }
  }
}
    ${AddressFragmentDoc}
${MediaFragmentDoc}
${ContactFragmentDoc}
${DealCategoryFragmentDoc}`;
export const EventTargetGroupFragmentDoc = gql`
    fragment EventTargetGroup on EventTargetGroupEntity {
  id
  translatables {
    id
    name
    language {
      id
      locale
      name
    }
  }
}
    `;
export const ArticleCommentFragmentDoc = gql`
    fragment ArticleComment on ArticleCommentEntity {
  id
  created
  modified
  content
  article {
    id
  }
  userContext {
    id
    uploads {
      profilePicture
      title
      media {
        ...Media
      }
    }
    user {
      firstName
      lastName
    }
  }
  translatables {
    id
    content
    language {
      id
      locale
      name
    }
  }
}
    ${MediaFragmentDoc}`;
export const RatingDtoFragmentDoc = gql`
    fragment RatingDto on RatingDto {
  average
  distribution
  total
}
    `;
export const ArticleCategoryFragmentDoc = gql`
    fragment ArticleCategory on ArticleCategoryEntity {
  id
  icon
  color
  translatables {
    id
    name
    language {
      ...Language
    }
  }
}
    ${LanguageFragmentDoc}`;
export const PublicAuthorFragmentDoc = gql`
    fragment PublicAuthor on PublicAuthorEntity {
  id
  name
  email
  phone
}
    `;
export const ArticleFragmentDoc = gql`
    fragment Article on ArticleEntity {
  id
  approved
  created
  modified
  slug
  author {
    slug
    user {
      firstName
      lastName
    }
  }
  lastArticleComment {
    ...ArticleComment
  }
  calculatedRatings {
    ...RatingDto
  }
  uploads {
    title
    card
    media {
      ...Media
    }
  }
  category {
    ...ArticleCategory
  }
  publicAuthor {
    ...PublicAuthor
  }
  translatables {
    id
    content
    shortDescription
    name
    language {
      ...Language
    }
  }
}
    ${ArticleCommentFragmentDoc}
${RatingDtoFragmentDoc}
${MediaFragmentDoc}
${ArticleCategoryFragmentDoc}
${PublicAuthorFragmentDoc}
${LanguageFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on UserEntity {
  id
  firstName
  lastName
  email
  verified
}
    `;
export const FriendFragmentDoc = gql`
    fragment Friend on FriendEntity {
  id
  accepted
  addressee {
    id
    user {
      ...User
    }
  }
  requester {
    id
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;
export const NotificationFragmentDoc = gql`
    fragment Notification on NotificationEntity {
  id
  read
  modified
  translatables {
    content
    id
    title
    language {
      id
      locale
      name
    }
  }
}
    `;
export const FormFragmentDoc = gql`
    fragment Form on UserFormTemplateEntity {
  id
  modified
  name
  type {
    id
    translatables {
      id
      name
      language {
        id
        locale
        name
      }
    }
  }
  translatables {
    id
    content
    language {
      id
      locale
      name
    }
  }
}
    `;
export const UserContextFragmentDoc = gql`
    fragment UserContext on UserContextEntity {
  id
  slug
  articles {
    ...Article
  }
  articleRatings {
    id
    score
    article {
      id
    }
  }
  eventRatings {
    id
    score
    event {
      id
    }
  }
  friendRequester {
    ...Friend
  }
  friendAddressee {
    ...Friend
  }
  organisationRatings {
    id
    score
    organisation {
      id
    }
  }
  uploads {
    profilePicture
    title
    media {
      ...Media
    }
  }
  user {
    id
    firstName
    lastName
    email
    notifications {
      ...Notification
    }
  }
  userFormTemplate {
    ...Form
  }
}
    ${ArticleFragmentDoc}
${FriendFragmentDoc}
${MediaFragmentDoc}
${NotificationFragmentDoc}
${FormFragmentDoc}`;
export const EventCategoryFragmentDoc = gql`
    fragment EventCategory on EventCategoryEntity {
  id
  color
  icon
  name
  translatables {
    id
    name
    language {
      ...Language
    }
  }
}
    ${LanguageFragmentDoc}`;
export const EventCommentFragmentDoc = gql`
    fragment EventComment on EventCommentEntity {
  id
  created
  modified
  content
  event {
    id
  }
  userContext {
    ...UserContext
  }
  translatables {
    id
    content
    language {
      id
      locale
      name
    }
  }
}
    ${UserContextFragmentDoc}`;
export const OrganisationCommentFragmentDoc = gql`
    fragment OrganisationComment on OrganisationCommentEntity {
  id
  created
  modified
  content
  organisation {
    id
  }
  userContext {
    ...UserContext
  }
  translatables {
    id
    content
    language {
      id
      locale
      name
    }
  }
}
    ${UserContextFragmentDoc}`;
export const OrganisationFragmentDoc = gql`
    fragment Organisation on OrganisationEntity {
  id
  name
  slug
  address {
    ...Address
  }
  address {
    ...Address
  }
  contact {
    ...Contact
  }
  calculatedRatings {
    ...RatingDto
  }
  lastOrganisationComment {
    ...OrganisationComment
  }
  members {
    approved
    admin
    isPublic
    organisation {
      id
    }
    userContext {
      ...UserContext
    }
  }
  translatables {
    id
    description
    language {
      id
      locale
      name
    }
  }
  uploads {
    title
    card
    media {
      ...Media
    }
  }
}
    ${AddressFragmentDoc}
${ContactFragmentDoc}
${RatingDtoFragmentDoc}
${OrganisationCommentFragmentDoc}
${UserContextFragmentDoc}
${MediaFragmentDoc}`;
export const ScheduleFragmentDoc = gql`
    fragment Schedule on ScheduleEntity {
  id
  startDate
  endDate
}
    `;
export const EventFragmentDoc = gql`
    fragment Event on EventEntity {
  id
  entryFee
  hasSchedules
  slug
  videoChatLink
  address {
    ...Address
  }
  attendeeConfiguration {
    approval
    maxAttendees
    attendees {
      id
      approved
      userContext {
        ...UserContext
      }
    }
  }
  calculatedRatings {
    ...RatingDto
  }
  category {
    ...EventCategory
  }
  contact {
    ...Contact
  }
  lastEventComment {
    ...EventComment
  }
  organisation {
    ...Organisation
  }
  ratings {
    id
    score
    userContext {
      id
    }
  }
  schedule(begin: $scheduleBegin, end: $scheduleEnd) {
    ...Schedule
  }
  translatables {
    id
    name
    content
    shortDescription
    language {
      id
      locale
      name
    }
  }
  uploads {
    title
    card
    media {
      ...Media
    }
  }
}
    ${AddressFragmentDoc}
${UserContextFragmentDoc}
${RatingDtoFragmentDoc}
${EventCategoryFragmentDoc}
${ContactFragmentDoc}
${EventCommentFragmentDoc}
${OrganisationFragmentDoc}
${ScheduleFragmentDoc}
${MediaFragmentDoc}`;
export const LabelFragmentDoc = gql`
    fragment Label on LabelEntity {
  id
  tagId
  translatables {
    id
    content
    language {
      id
      locale
      name
    }
  }
}
    `;
export const MenuItemFragmentDoc = gql`
    fragment MenuItem on MenuItemEntity {
  id
  header
  order
  icon
  feature {
    id
    key
  }
  parent {
    id
  }
  page {
    id
  }
  translatables {
    id
    name
    language {
      ...Language
    }
  }
  subMenuItems {
    id
    order
    icon
    feature {
      id
      key
    }
    page {
      id
    }
    subMenuItems {
      id
    }
    translatables {
      id
      name
      shortDescription
      language {
        ...Language
      }
    }
  }
}
    ${LanguageFragmentDoc}`;
export const PageFragmentDoc = gql`
    fragment Page on PageEntity {
  id
  callUrl
  slug
  uploads {
    title
    media {
      ...Media
    }
  }
  pageFeatures {
    id
    order
    feature {
      id
      key
    }
  }
  translatables {
    id
    callText
    content
    shortDescription
    name
    language {
      id
      locale
      name
    }
  }
}
    ${MediaFragmentDoc}`;
export const ReportFragmentDoc = gql`
    fragment Report on ReportEntity {
  id
  name
  email
  captchaToken
  translatables {
    id
    content
  }
  type {
    id
  }
}
    `;
export const SocialMediaFragmentDoc = gql`
    fragment SocialMedia on SocialMediaEntity {
  icon
  name
  url
}
    `;
export const SurveyFragmentDoc = gql`
    fragment Survey on SurveyEntity {
  id
  name
  slug
  dueDate
  startDate
  uploads {
    title
    card
    media {
      ...Media
    }
  }
  translatables {
    id
    description
    language {
      id
      locale
      name
    }
  }
  contact {
    ...Contact
  }
}
    ${MediaFragmentDoc}
${ContactFragmentDoc}`;
export const ThemeFragmentDoc = gql`
    fragment Theme on ThemeEntity {
  id
  isDefault
  name
  variables {
    id
    key
    value
  }
}
    `;
export const UserContextAuthorFragmentDoc = gql`
    fragment UserContextAuthor on UserContextEntity {
  id
  description
  slug
  uploads {
    profilePicture
    title
    media {
      ...Media
    }
  }
  articles {
    ...Article
  }
  user {
    firstName
    lastName
    email
  }
}
    ${MediaFragmentDoc}
${ArticleFragmentDoc}`;
export const CheckPasswordDocument = gql`
    mutation checkPassword($password: String) {
  checkPassword(password: $password)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CheckPasswordGQL extends Apollo.Mutation<CheckPasswordMutation, CheckPasswordMutationVariables> {
    override document = CheckPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteAttendeeDocument = gql`
    mutation deleteAttendee($id: String) {
  deleteAttendee(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteAttendeeGQL extends Apollo.Mutation<DeleteAttendeeMutation, DeleteAttendeeMutationVariables> {
    override document = DeleteAttendeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  createToken(email: $email, password: $password) {
    access
    refresh
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    override document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RefreshDocument = gql`
    mutation refresh($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    access
    refresh
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RefreshGQL extends Apollo.Mutation<RefreshMutation, RefreshMutationVariables> {
    override document = RefreshDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ResetPasswordDocument = gql`
    mutation resetPassword($token: String, $password: String) {
  resetPassword(token: $token, password: $password)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResetPasswordGQL extends Apollo.Mutation<ResetPasswordMutation, ResetPasswordMutationVariables> {
    override document = ResetPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveArticleRatingDocument = gql`
    mutation saveArticleRating($entity: ArticleRatingEntityInput!) {
  saveArticleRating(entity: $entity) {
    score
    article {
      id
    }
    userContext {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveArticleRatingGQL extends Apollo.Mutation<SaveArticleRatingMutation, SaveArticleRatingMutationVariables> {
    override document = SaveArticleRatingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveArticleDocument = gql`
    mutation saveArticle($entity: ArticleEntityInput!) {
  saveArticle(entity: $entity) {
    ...Article
  }
}
    ${ArticleFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveArticleGQL extends Apollo.Mutation<SaveArticleMutation, SaveArticleMutationVariables> {
    override document = SaveArticleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveAttendeeDocument = gql`
    mutation saveAttendee($entity: AttendeeEntityInput!) {
  saveAttendee(entity: $entity) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveAttendeeGQL extends Apollo.Mutation<SaveAttendeeMutation, SaveAttendeeMutationVariables> {
    override document = SaveAttendeeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveArticleCommentDocument = gql`
    mutation saveArticleComment($entity: ArticleCommentEntityInput!) {
  saveArticleComment(entity: $entity) {
    ...ArticleComment
  }
}
    ${ArticleCommentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveArticleCommentGQL extends Apollo.Mutation<SaveArticleCommentMutation, SaveArticleCommentMutationVariables> {
    override document = SaveArticleCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveEventCommentDocument = gql`
    mutation saveEventComment($entity: EventCommentEntityInput!) {
  saveEventComment(entity: $entity) {
    ...EventComment
  }
}
    ${EventCommentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveEventCommentGQL extends Apollo.Mutation<SaveEventCommentMutation, SaveEventCommentMutationVariables> {
    override document = SaveEventCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveEventRatingDocument = gql`
    mutation saveEventRating($entity: EventRatingEntityInput!) {
  saveEventRating(entity: $entity) {
    score
    event {
      id
    }
    userContext {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveEventRatingGQL extends Apollo.Mutation<SaveEventRatingMutation, SaveEventRatingMutationVariables> {
    override document = SaveEventRatingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveNotificationsDocument = gql`
    mutation saveNotifications($entities: [NotificationEntityInput!]) {
  saveNotifications(entities: $entities) {
    ...Notification
  }
}
    ${NotificationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveNotificationsGQL extends Apollo.Mutation<SaveNotificationsMutation, SaveNotificationsMutationVariables> {
    override document = SaveNotificationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveOrganisationCommentDocument = gql`
    mutation saveOrganisationComment($entity: OrganisationCommentEntityInput!) {
  saveOrganisationComment(entity: $entity) {
    ...OrganisationComment
  }
}
    ${OrganisationCommentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveOrganisationCommentGQL extends Apollo.Mutation<SaveOrganisationCommentMutation, SaveOrganisationCommentMutationVariables> {
    override document = SaveOrganisationCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveOrganisationRatingDocument = gql`
    mutation saveOrganisationRating($entity: OrganisationRatingEntityInput!) {
  saveOrganisationRating(entity: $entity) {
    score
    organisation {
      id
    }
    userContext {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveOrganisationRatingGQL extends Apollo.Mutation<SaveOrganisationRatingMutation, SaveOrganisationRatingMutationVariables> {
    override document = SaveOrganisationRatingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveReportDocument = gql`
    mutation saveReport($entity: ReportEntityInput!) {
  saveReport(entity: $entity) {
    ...Report
  }
}
    ${ReportFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveReportGQL extends Apollo.Mutation<SaveReportMutation, SaveReportMutationVariables> {
    override document = SaveReportDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveUserDocument = gql`
    mutation saveUser($entity: UserContextEntityInput!) {
  saveUserContext(entity: $entity) {
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveUserGQL extends Apollo.Mutation<SaveUserMutation, SaveUserMutationVariables> {
    override document = SaveUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SendPasswordResetDocument = gql`
    mutation sendPasswordReset($email: String) {
  sendPasswordReset(email: $email)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendPasswordResetGQL extends Apollo.Mutation<SendPasswordResetMutation, SendPasswordResetMutationVariables> {
    override document = SendPasswordResetDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SendVerificationDocument = gql`
    mutation sendVerification($email: String) {
  sendVerification(email: $email)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendVerificationGQL extends Apollo.Mutation<SendVerificationMutation, SendVerificationMutationVariables> {
    override document = SendVerificationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAppsDocument = gql`
    query getApps {
  getApps {
    result {
      ...App
    }
  }
}
    ${AppFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAppsGQL extends Apollo.Query<GetAppsQuery, GetAppsQueryVariables> {
    override document = GetAppsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetArticleCategoriesDocument = gql`
    query getArticleCategories($params: FilterSortPaginateInput) {
  getArticleCategories(params: $params) {
    result {
      color
      icon
      id
      translatables {
        id
        name
        language {
          id
          name
          locale
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticleCategoriesGQL extends Apollo.Query<GetArticleCategoriesQuery, GetArticleCategoriesQueryVariables> {
    override document = GetArticleCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetArticleCommentsDocument = gql`
    query getArticleComments($params: FilterSortPaginateInput) {
  getArticleComments(params: $params) {
    result {
      ...ArticleComment
    }
  }
}
    ${ArticleCommentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticleCommentsGQL extends Apollo.Query<GetArticleCommentsQuery, GetArticleCommentsQueryVariables> {
    override document = GetArticleCommentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetArticleDocument = gql`
    query getArticle($entity: ArticleEntityInput) {
  getArticle(entity: $entity) {
    ...Article
  }
}
    ${ArticleFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticleGQL extends Apollo.Query<GetArticleQuery, GetArticleQueryVariables> {
    override document = GetArticleDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetArticlesDocument = gql`
    query getArticles($params: FilterSortPaginateInput) {
  getArticles(params: $params) {
    result {
      ...Article
    }
    total
  }
}
    ${ArticleFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetArticlesGQL extends Apollo.Query<GetArticlesQuery, GetArticlesQueryVariables> {
    override document = GetArticlesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetConfigurationsDocument = gql`
    query getConfigurations {
  getConfigurations {
    result {
      ...Configuration
    }
  }
}
    ${ConfigurationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetConfigurationsGQL extends Apollo.Query<GetConfigurationsQuery, GetConfigurationsQueryVariables> {
    override document = GetConfigurationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetContestTypesDocument = gql`
    query getContestTypes($params: FilterSortPaginateInput) {
  getContestTypes(params: $params) {
    result {
      id
      translatables {
        id
        name
        language {
          id
          name
          locale
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestTypesGQL extends Apollo.Query<GetContestTypesQuery, GetContestTypesQueryVariables> {
    override document = GetContestTypesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetContestDocument = gql`
    query getContest($entity: ContestEntityInput) {
  getContest(entity: $entity) {
    ...Contest
  }
}
    ${ContestFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestGQL extends Apollo.Query<GetContestQuery, GetContestQueryVariables> {
    override document = GetContestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetContestsDocument = gql`
    query getContests($params: FilterSortPaginateInput) {
  getContests(params: $params) {
    result {
      ...Contest
    }
    total
  }
}
    ${ContestFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContestsGQL extends Apollo.Query<GetContestsQuery, GetContestsQueryVariables> {
    override document = GetContestsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDealCategoriesDocument = gql`
    query getDealCategories {
  getDealCategories {
    result {
      ...DealCategory
    }
  }
}
    ${DealCategoryFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDealCategoriesGQL extends Apollo.Query<GetDealCategoriesQuery, GetDealCategoriesQueryVariables> {
    override document = GetDealCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDealDocument = gql`
    query getDeal($entity: DealEntityInput) {
  getDeal(entity: $entity) {
    ...Deal
  }
}
    ${DealFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDealGQL extends Apollo.Query<GetDealQuery, GetDealQueryVariables> {
    override document = GetDealDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDealsDocument = gql`
    query getDeals($params: FilterSortPaginateInput) {
  getDeals(params: $params) {
    result {
      ...Deal
    }
    total
  }
}
    ${DealFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDealsGQL extends Apollo.Query<GetDealsQuery, GetDealsQueryVariables> {
    override document = GetDealsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEventCategoriesDocument = gql`
    query getEventCategories {
  getEventCategories {
    result {
      ...EventCategory
    }
  }
}
    ${EventCategoryFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventCategoriesGQL extends Apollo.Query<GetEventCategoriesQuery, GetEventCategoriesQueryVariables> {
    override document = GetEventCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEventCommentsDocument = gql`
    query getEventComments($params: FilterSortPaginateInput) {
  getEventComments(params: $params) {
    result {
      ...EventComment
    }
  }
}
    ${EventCommentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventCommentsGQL extends Apollo.Query<GetEventCommentsQuery, GetEventCommentsQueryVariables> {
    override document = GetEventCommentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEventTargetGroupsDocument = gql`
    query getEventTargetGroups {
  getEventTargetGroups {
    result {
      ...EventTargetGroup
    }
  }
}
    ${EventTargetGroupFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventTargetGroupsGQL extends Apollo.Query<GetEventTargetGroupsQuery, GetEventTargetGroupsQueryVariables> {
    override document = GetEventTargetGroupsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEventDocument = gql`
    query getEvent($entity: EventEntityInput, $scheduleBegin: OffsetDateTime, $scheduleEnd: OffsetDateTime) {
  getEvent(entity: $entity) {
    ...Event
  }
}
    ${EventFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventGQL extends Apollo.Query<GetEventQuery, GetEventQueryVariables> {
    override document = GetEventDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetEventsDocument = gql`
    query getEvents($params: FilterSortPaginateInput, $scheduleBegin: OffsetDateTime, $scheduleEnd: OffsetDateTime) {
  getEvents(params: $params) {
    result {
      ...Event
    }
    total
  }
}
    ${EventFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetEventsGQL extends Apollo.Query<GetEventsQuery, GetEventsQueryVariables> {
    override document = GetEventsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLabelsDocument = gql`
    query getLabels {
  getLabels {
    result {
      ...Label
    }
  }
}
    ${LabelFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLabelsGQL extends Apollo.Query<GetLabelsQuery, GetLabelsQueryVariables> {
    override document = GetLabelsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLanguagesDocument = gql`
    query getLanguages {
  getLanguages {
    result {
      ...Language
    }
  }
}
    ${LanguageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLanguagesGQL extends Apollo.Query<GetLanguagesQuery, GetLanguagesQueryVariables> {
    override document = GetLanguagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMeDocument = gql`
    query GetMe {
  me {
    ...UserContext
  }
}
    ${UserContextFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMeGQL extends Apollo.Query<GetMeQuery, GetMeQueryVariables> {
    override document = GetMeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetMenuDocument = gql`
    query getMenu($parent: String) {
  getMenuItems(
    params: {sort: "order", expression: {entity: {path: "parent.id", value: $parent}}}
  ) {
    result {
      ...MenuItem
    }
  }
}
    ${MenuItemFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetMenuGQL extends Apollo.Query<GetMenuQuery, GetMenuQueryVariables> {
    override document = GetMenuDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetNotificationsDocument = gql`
    query getNotifications {
  getNotifications {
    result {
      ...Notification
    }
  }
}
    ${NotificationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNotificationsGQL extends Apollo.Query<GetNotificationsQuery, GetNotificationsQueryVariables> {
    override document = GetNotificationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetOrganisationCommentsDocument = gql`
    query getOrganisationComments($params: FilterSortPaginateInput) {
  getOrganisationComments(params: $params) {
    result {
      ...OrganisationComment
    }
  }
}
    ${OrganisationCommentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationCommentsGQL extends Apollo.Query<GetOrganisationCommentsQuery, GetOrganisationCommentsQueryVariables> {
    override document = GetOrganisationCommentsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetOrganisationDocument = gql`
    query getOrganisation($entity: OrganisationEntityInput) {
  getOrganisation(entity: $entity) {
    ...Organisation
  }
}
    ${OrganisationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationGQL extends Apollo.Query<GetOrganisationQuery, GetOrganisationQueryVariables> {
    override document = GetOrganisationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetOrganisationsDocument = gql`
    query getOrganisations($params: FilterSortPaginateInput) {
  getOrganisations(params: $params) {
    result {
      ...Organisation
    }
    total
  }
}
    ${OrganisationFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOrganisationsGQL extends Apollo.Query<GetOrganisationsQuery, GetOrganisationsQueryVariables> {
    override document = GetOrganisationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPageDocument = gql`
    query getPage($isLanding: Boolean, $slug: String) {
  getPage(entity: {isLanding: $isLanding, slug: $slug}) {
    ...Page
  }
}
    ${PageFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPageGQL extends Apollo.Query<GetPageQuery, GetPageQueryVariables> {
    override document = GetPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetReportTypesDocument = gql`
    query getReportTypes($params: FilterSortPaginateInput) {
  getReportTypes(params: $params) {
    result {
      id
      translatables {
        id
        name
        language {
          id
          name
          locale
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetReportTypesGQL extends Apollo.Query<GetReportTypesQuery, GetReportTypesQueryVariables> {
    override document = GetReportTypesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSchedulesDocument = gql`
    query getSchedules($params: FilterSortPaginateInput) {
  getSchedules(params: $params) {
    result {
      ...Schedule
    }
  }
}
    ${ScheduleFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSchedulesGQL extends Apollo.Query<GetSchedulesQuery, GetSchedulesQueryVariables> {
    override document = GetSchedulesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSocialMediaDocument = gql`
    query getSocialMedia {
  getSocialMedias {
    result {
      ...SocialMedia
    }
  }
}
    ${SocialMediaFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSocialMediaGQL extends Apollo.Query<GetSocialMediaQuery, GetSocialMediaQueryVariables> {
    override document = GetSocialMediaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSuburbsDocument = gql`
    query getSuburbs {
  getSuburbs {
    result {
      ...Suburb
    }
  }
}
    ${SuburbFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSuburbsGQL extends Apollo.Query<GetSuburbsQuery, GetSuburbsQueryVariables> {
    override document = GetSuburbsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSurveyDocument = gql`
    query getSurvey($entity: SurveyEntityInput) {
  getSurvey(entity: $entity) {
    ...Survey
  }
}
    ${SurveyFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSurveyGQL extends Apollo.Query<GetSurveyQuery, GetSurveyQueryVariables> {
    override document = GetSurveyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSurveysDocument = gql`
    query getSurveys($params: FilterSortPaginateInput) {
  getSurveys(params: $params) {
    result {
      ...Survey
    }
    total
  }
}
    ${SurveyFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSurveysGQL extends Apollo.Query<GetSurveysQuery, GetSurveysQueryVariables> {
    override document = GetSurveysDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetThemeDocument = gql`
    query getTheme {
  getThemes {
    result {
      ...Theme
    }
  }
}
    ${ThemeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetThemeGQL extends Apollo.Query<GetThemeQuery, GetThemeQueryVariables> {
    override document = GetThemeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserContextAuthorDocument = gql`
    query getUserContextAuthor($entity: UserContextEntityInput) {
  getUserContext(entity: $entity) {
    ...UserContextAuthor
  }
}
    ${UserContextAuthorFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserContextAuthorGQL extends Apollo.Query<GetUserContextAuthorQuery, GetUserContextAuthorQueryVariables> {
    override document = GetUserContextAuthorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserContextDocument = gql`
    query getUserContext($entity: UserContextEntityInput) {
  getUserContext(entity: $entity) {
    ...UserContext
  }
}
    ${UserContextFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserContextGQL extends Apollo.Query<GetUserContextQuery, GetUserContextQueryVariables> {
    override document = GetUserContextDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserContextsDocument = gql`
    query getUserContexts($params: FilterSortPaginateInput) {
  getUserContexts(params: $params) {
    result {
      ...UserContext
    }
  }
}
    ${UserContextFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserContextsGQL extends Apollo.Query<GetUserContextsQuery, GetUserContextsQueryVariables> {
    override document = GetUserContextsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SearchDocument = gql`
    query search($params: FilterSortPaginateInput) {
  search(params: $params) {
    slug
    feature {
      id
      key
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SearchGQL extends Apollo.Query<SearchQuery, SearchQueryVariables> {
    override document = SearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetServerVersionDocument = gql`
    query getServerVersion {
  getInformation {
    version
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetServerVersionGQL extends Apollo.Query<GetServerVersionQuery, GetServerVersionQueryVariables> {
    override document = GetServerVersionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VerifyUserDocument = gql`
    mutation verifyUser($token: String) {
  verify(token: $token) {
    ...User
  }
}
    ${UserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyUserGQL extends Apollo.Mutation<VerifyUserMutation, VerifyUserMutationVariables> {
    override document = VerifyUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }