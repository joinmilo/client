/* eslint-disable */
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
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
  Long: any;
  Map_Integer_DoubleScalar: any;
  Map_String_StringScalar: any;
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

export type AdminFooterItemEntity = {
  __typename?: 'AdminFooterItemEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<AdminFooterParentEntity>;
  translatables?: Maybe<Array<Maybe<AdminFooterItemTranslatableEntity>>>;
  url?: Maybe<Scalars['String']>;
};

export type AdminFooterItemEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<AdminFooterParentEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<AdminFooterItemTranslatableEntityInput>>>;
  url?: InputMaybe<Scalars['String']>;
};

export type AdminFooterItemTranslatableEntity = {
  __typename?: 'AdminFooterItemTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type AdminFooterItemTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AdminFooterParentEntity = {
  __typename?: 'AdminFooterParentEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<AdminFooterItemEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<AdminFooterParentTranslatableEntity>>>;
};

export type AdminFooterParentEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<AdminFooterItemEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<AdminFooterParentTranslatableEntityInput>>>;
};

export type AdminFooterParentTranslatableEntity = {
  __typename?: 'AdminFooterParentTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type AdminFooterParentTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type AnalyticsDto = {
  __typename?: 'AnalyticsDto';
  average?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  series?: Maybe<Array<Maybe<AnalyticsEntry>>>;
  sum?: Maybe<Scalars['Float']>;
};

export type AnalyticsEntry = {
  __typename?: 'AnalyticsEntry';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
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
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type AppPlatformEntityInput = {
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
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
  favoritingUsers?: Maybe<Array<Maybe<UserContextEntity>>>;
  id?: Maybe<Scalars['String']>;
  lastArticleComment?: Maybe<ArticleCommentEntity>;
  metaDescription?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  publicAuthor?: Maybe<ArticlePublicAuthorEntity>;
  ratings?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  searchStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<ArticleTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<ArticleMediaEntity>>>;
  visitors?: Maybe<Array<Maybe<ArticleVisitorEntity>>>;
};


export type ArticleEntitySearchStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type ArticleEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  author?: InputMaybe<UserContextEntityInput>;
  captchaToken?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<ArticleCategoryEntityInput>;
  comments?: InputMaybe<Array<InputMaybe<ArticleCommentEntityInput>>>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  favoritingUsers?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  publicAuthor?: InputMaybe<ArticlePublicAuthorEntityInput>;
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

export type ArticlePublicAuthorEntity = {
  __typename?: 'ArticlePublicAuthorEntity';
  articles?: Maybe<Array<Maybe<ArticleEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type ArticlePublicAuthorEntityInput = {
  articles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
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

export type ChannelEntity = {
  __typename?: 'ChannelEntity';
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type ChannelEntityInput = {
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ConfigurationEntity = {
  __typename?: 'ConfigurationEntity';
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type ConfigurationEntityInput = {
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
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

export type ContestCommentEntity = {
  __typename?: 'ContestCommentEntity';
  content?: Maybe<Scalars['String']>;
  contest?: Maybe<ContestEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  translatables?: Maybe<Array<Maybe<ContestCommentTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type ContestCommentEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  contest?: InputMaybe<ContestEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  translatables?: InputMaybe<Array<InputMaybe<ContestCommentTranslatableEntityInput>>>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type ContestCommentTranslatableEntity = {
  __typename?: 'ContestCommentTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type ContestCommentTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type ContestEntity = {
  __typename?: 'ContestEntity';
  contact?: Maybe<ContactEntity>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  lastContestComment?: Maybe<ContestCommentEntity>;
  metaDescription?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  multiSubmission?: Maybe<Scalars['Boolean']>;
  multiVote?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  offer?: Maybe<Scalars['Boolean']>;
  participationEndDate?: Maybe<Scalars['OffsetDateTime']>;
  participations?: Maybe<Array<Maybe<ContestParticipationEntity>>>;
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
  participationEndDate?: InputMaybe<Scalars['OffsetDateTime']>;
  participations?: InputMaybe<Array<InputMaybe<ContestParticipationEntityInput>>>;
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
  code?: Maybe<Scalars['String']>;
  contests?: Maybe<Array<Maybe<ContestEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<ContestTypeTranslatableEntity>>>;
};

export type ContestTypeEntityInput = {
  code?: InputMaybe<Scalars['String']>;
  contests?: InputMaybe<Array<InputMaybe<ContestEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
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
  favoritingUsers?: Maybe<Array<Maybe<UserContextEntity>>>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
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
  favoritingUsers?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
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

export type EventAttendeeConfigurationEntity = {
  __typename?: 'EventAttendeeConfigurationEntity';
  approval?: Maybe<Scalars['Boolean']>;
  attendees?: Maybe<Array<Maybe<EventAttendeeEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  id?: Maybe<Scalars['String']>;
  maxAttendees?: Maybe<Scalars['Int']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type EventAttendeeConfigurationEntityInput = {
  approval?: InputMaybe<Scalars['Boolean']>;
  attendees?: InputMaybe<Array<InputMaybe<EventAttendeeEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  maxAttendees?: InputMaybe<Scalars['Int']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type EventAttendeeEntity = {
  __typename?: 'EventAttendeeEntity';
  approved?: Maybe<Scalars['Boolean']>;
  configuration?: Maybe<EventAttendeeConfigurationEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  userContext?: Maybe<UserContextEntity>;
};

export type EventAttendeeEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  configuration?: InputMaybe<EventAttendeeConfigurationEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  userContext?: InputMaybe<UserContextEntityInput>;
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
  attendeeConfiguration?: Maybe<EventAttendeeConfigurationEntity>;
  calculatedRatings?: Maybe<RatingDto>;
  category?: Maybe<EventCategoryEntity>;
  comments?: Maybe<Array<Maybe<EventCommentEntity>>>;
  contact?: Maybe<ContactEntity>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  creator?: Maybe<UserContextEntity>;
  entryFee?: Maybe<Scalars['Float']>;
  favoritingUsers?: Maybe<Array<Maybe<UserContextEntity>>>;
  hasSchedules?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  lastEventComment?: Maybe<EventCommentEntity>;
  metaDescription?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  organisation?: Maybe<OrganisationEntity>;
  ratings?: Maybe<Array<Maybe<EventRatingEntity>>>;
  schedule?: Maybe<EventScheduleEntity>;
  schedules?: Maybe<Array<Maybe<EventScheduleEntity>>>;
  searchStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sponsored?: Maybe<Scalars['Boolean']>;
  targetGroups?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  translatables?: Maybe<Array<Maybe<EventTranslatableEntity>>>;
  uploads?: Maybe<Array<Maybe<EventMediaEntity>>>;
  videoChatLink?: Maybe<Scalars['String']>;
  visitors?: Maybe<Array<Maybe<EventVisitorEntity>>>;
  visitorAnalytics?: Maybe<AnalyticsDto>;
};


export type EventEntityScheduleArgs = {
  begin?: InputMaybe<Scalars['OffsetDateTime']>;
  end?: InputMaybe<Scalars['OffsetDateTime']>;
};


export type EventEntitySearchStatisticsArgs = {
  endDate?: InputMaybe<Scalars['OffsetDateTime']>;
  interval?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type EventEntityInput = {
  address?: InputMaybe<AddressEntityInput>;
  attendeeConfiguration?: InputMaybe<EventAttendeeConfigurationEntityInput>;
  category?: InputMaybe<EventCategoryEntityInput>;
  comments?: InputMaybe<Array<InputMaybe<EventCommentEntityInput>>>;
  contact?: InputMaybe<ContactEntityInput>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  creator?: InputMaybe<UserContextEntityInput>;
  entryFee?: InputMaybe<Scalars['Float']>;
  favoritingUsers?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  ratings?: InputMaybe<Array<InputMaybe<EventRatingEntityInput>>>;
  schedules?: InputMaybe<Array<InputMaybe<EventScheduleEntityInput>>>;
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

export type EventScheduleEntity = {
  __typename?: 'EventScheduleEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  endDate?: Maybe<Scalars['OffsetDateTime']>;
  event?: Maybe<EventEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  startDate?: Maybe<Scalars['OffsetDateTime']>;
};

export type EventScheduleEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  endDate?: InputMaybe<Scalars['OffsetDateTime']>;
  event?: InputMaybe<EventEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']>;
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
  active?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  embeddings?: Maybe<Array<Maybe<PageEmbeddingEntity>>>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  menuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<FeatureTranslatableEntity>>>;
};

export type FeatureEntityInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  embeddings?: InputMaybe<Array<InputMaybe<PageEmbeddingEntityInput>>>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  menuItems?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
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

export type InfoMediaCategoryEntity = {
  __typename?: 'InfoMediaCategoryEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  infoMedia?: Maybe<Array<Maybe<InfoMediaEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<InfoMediaCategoryTranslatableEntity>>>;
};

export type InfoMediaCategoryEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  infoMedia?: InputMaybe<Array<InputMaybe<InfoMediaEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<InfoMediaCategoryTranslatableEntityInput>>>;
};

export type InfoMediaCategoryTranslatableEntity = {
  __typename?: 'InfoMediaCategoryTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type InfoMediaCategoryTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type InfoMediaEntity = {
  __typename?: 'InfoMediaEntity';
  category?: Maybe<InfoMediaCategoryEntity>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<MediaEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type InfoMediaEntityInput = {
  category?: InputMaybe<InfoMediaCategoryEntityInput>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type InformationDto = {
  __typename?: 'InformationDto';
  version?: Maybe<Scalars['String']>;
};

export enum IntervalFilter {
  CalendarWeeks = 'CALENDAR_WEEKS',
  Daily = 'DAILY',
  Monthly = 'MONTHLY'
}

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
  active?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type LanguageEntityInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MediaAttributionEntity = {
  __typename?: 'MediaAttributionEntity';
  author?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  source?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MediaAttributionEntityInput = {
  author?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  license?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  source?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MediaEntity = {
  __typename?: 'MediaEntity';
  attribution?: Maybe<MediaAttributionEntity>;
  base64?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  extension?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Long']>;
  thumbnail?: Maybe<MediaEntity>;
  url?: Maybe<Scalars['String']>;
};

export type MediaEntityInput = {
  attribution?: InputMaybe<MediaAttributionEntityInput>;
  base64?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  extension?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Long']>;
  thumbnail?: InputMaybe<MediaEntityInput>;
  url?: InputMaybe<Scalars['String']>;
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
  addFavoriteArticle?: Maybe<UserContextEntity>;
  addFavoriteAuthor?: Maybe<UserContextEntity>;
  addFavoriteDeal?: Maybe<UserContextEntity>;
  addFavoriteEvent?: Maybe<UserContextEntity>;
  addFavoriteOrganisation?: Maybe<UserContextEntity>;
  addUploads?: Maybe<UserEntity>;
  changePassword?: Maybe<Scalars['Boolean']>;
  checkPassword?: Maybe<Scalars['Float']>;
  createToken?: Maybe<TokenDto>;
  deleteAddress?: Maybe<Scalars['Boolean']>;
  deleteAddresses?: Maybe<Scalars['Boolean']>;
  deleteAdminFooterItem?: Maybe<Scalars['Boolean']>;
  deleteAdminFooterItems?: Maybe<Scalars['Boolean']>;
  deleteAdminFooterParent?: Maybe<Scalars['Boolean']>;
  deleteAdminFooterParents?: Maybe<Scalars['Boolean']>;
  deleteApp?: Maybe<Scalars['Boolean']>;
  deleteApps?: Maybe<Scalars['Boolean']>;
  deleteArticle?: Maybe<Scalars['Boolean']>;
  deleteArticleCategories?: Maybe<Scalars['Boolean']>;
  deleteArticleCategory?: Maybe<Scalars['Boolean']>;
  deleteArticleComment?: Maybe<Scalars['Boolean']>;
  deleteArticleComments?: Maybe<Scalars['Boolean']>;
  deleteArticleMedia?: Maybe<Scalars['Boolean']>;
  deleteArticleMedium?: Maybe<Scalars['Boolean']>;
  deleteArticlePublicAuthor?: Maybe<Scalars['Boolean']>;
  deleteArticlePublicAuthors?: Maybe<Scalars['Boolean']>;
  deleteArticleRating?: Maybe<Scalars['Boolean']>;
  deleteArticleRatings?: Maybe<Scalars['Boolean']>;
  deleteArticles?: Maybe<Scalars['Boolean']>;
  deleteConfiguration?: Maybe<Scalars['Boolean']>;
  deleteConfigurations?: Maybe<Scalars['Boolean']>;
  deleteContact?: Maybe<Scalars['Boolean']>;
  deleteContacts?: Maybe<Scalars['Boolean']>;
  deleteContest?: Maybe<Scalars['Boolean']>;
  deleteContestComment?: Maybe<Scalars['Boolean']>;
  deleteContestComments?: Maybe<Scalars['Boolean']>;
  deleteContestType?: Maybe<Scalars['Boolean']>;
  deleteContestTypes?: Maybe<Scalars['Boolean']>;
  deleteContestVote?: Maybe<Scalars['Boolean']>;
  deleteContestVotes?: Maybe<Scalars['Boolean']>;
  deleteContests?: Maybe<Scalars['Boolean']>;
  deleteDeal?: Maybe<Scalars['Boolean']>;
  deleteDealCategories?: Maybe<Scalars['Boolean']>;
  deleteDealCategory?: Maybe<Scalars['Boolean']>;
  deleteDealMedia?: Maybe<Scalars['Boolean']>;
  deleteDealMedium?: Maybe<Scalars['Boolean']>;
  deleteDeals?: Maybe<Scalars['Boolean']>;
  deleteErrorMessage?: Maybe<Scalars['Boolean']>;
  deleteErrorMessages?: Maybe<Scalars['Boolean']>;
  deleteEvent?: Maybe<Scalars['Boolean']>;
  deleteEventAttendee?: Maybe<Scalars['Boolean']>;
  deleteEventAttendees?: Maybe<Scalars['Boolean']>;
  deleteEventCategories?: Maybe<Scalars['Boolean']>;
  deleteEventCategory?: Maybe<Scalars['Boolean']>;
  deleteEventComment?: Maybe<Scalars['Boolean']>;
  deleteEventComments?: Maybe<Scalars['Boolean']>;
  deleteEventMedia?: Maybe<Scalars['Boolean']>;
  deleteEventMedium?: Maybe<Scalars['Boolean']>;
  deleteEventRating?: Maybe<Scalars['Boolean']>;
  deleteEventRatings?: Maybe<Scalars['Boolean']>;
  deleteEventSchedule?: Maybe<Scalars['Boolean']>;
  deleteEventSchedules?: Maybe<Scalars['Boolean']>;
  deleteEventTargetGroup?: Maybe<Scalars['Boolean']>;
  deleteEventTargetGroups?: Maybe<Scalars['Boolean']>;
  deleteEvents?: Maybe<Scalars['Boolean']>;
  deleteFeature?: Maybe<Scalars['Boolean']>;
  deleteFeatures?: Maybe<Scalars['Boolean']>;
  deleteFriend?: Maybe<Scalars['Boolean']>;
  deleteFriends?: Maybe<Scalars['Boolean']>;
  deleteInfoMedia?: Maybe<Scalars['Boolean']>;
  deleteInfoMediaCategories?: Maybe<Scalars['Boolean']>;
  deleteInfoMediaCategory?: Maybe<Scalars['Boolean']>;
  deleteInfoMedium?: Maybe<Scalars['Boolean']>;
  deleteLabel?: Maybe<Scalars['Boolean']>;
  deleteLabels?: Maybe<Scalars['Boolean']>;
  deleteLanguage?: Maybe<Scalars['Boolean']>;
  deleteLanguages?: Maybe<Scalars['Boolean']>;
  deleteMe?: Maybe<Scalars['Boolean']>;
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
  deleteOrganisationMedia?: Maybe<Scalars['Boolean']>;
  deleteOrganisationMedium?: Maybe<Scalars['Boolean']>;
  deleteOrganisationMember?: Maybe<Scalars['Boolean']>;
  deleteOrganisationMembers?: Maybe<Scalars['Boolean']>;
  deleteOrganisationRating?: Maybe<Scalars['Boolean']>;
  deleteOrganisationRatings?: Maybe<Scalars['Boolean']>;
  deleteOrganisations?: Maybe<Scalars['Boolean']>;
  deletePage?: Maybe<Scalars['Boolean']>;
  deletePages?: Maybe<Scalars['Boolean']>;
  deletePrivilegeApplication?: Maybe<Scalars['Boolean']>;
  deletePrivilegeApplications?: Maybe<Scalars['Boolean']>;
  deleteQuestionOption?: Maybe<Scalars['Boolean']>;
  deleteQuestionOptions?: Maybe<Scalars['Boolean']>;
  deleteQuestionType?: Maybe<Scalars['Boolean']>;
  deleteQuestionTypes?: Maybe<Scalars['Boolean']>;
  deleteReport?: Maybe<Scalars['Boolean']>;
  deleteReportType?: Maybe<Scalars['Boolean']>;
  deleteReportTypes?: Maybe<Scalars['Boolean']>;
  deleteReports?: Maybe<Scalars['Boolean']>;
  deleteRole?: Maybe<Scalars['Boolean']>;
  deleteRoles?: Maybe<Scalars['Boolean']>;
  deleteSocialMedia?: Maybe<Scalars['Boolean']>;
  deleteSocialMedias?: Maybe<Scalars['Boolean']>;
  deleteSubscription?: Maybe<Scalars['Boolean']>;
  deleteSubscriptions?: Maybe<Scalars['Boolean']>;
  deleteSuburb?: Maybe<Scalars['Boolean']>;
  deleteSuburbs?: Maybe<Scalars['Boolean']>;
  deleteSurvey?: Maybe<Scalars['Boolean']>;
  deleteSurveyAnswer?: Maybe<Scalars['Boolean']>;
  deleteSurveyAnswers?: Maybe<Scalars['Boolean']>;
  deleteSurveyAssignment?: Maybe<Scalars['Boolean']>;
  deleteSurveyAssignments?: Maybe<Scalars['Boolean']>;
  deleteSurveyQuestion?: Maybe<Scalars['Boolean']>;
  deleteSurveyQuestions?: Maybe<Scalars['Boolean']>;
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
  removeFavoriteArticle?: Maybe<UserContextEntity>;
  removeFavoriteAuthor?: Maybe<UserContextEntity>;
  removeFavoriteDeal?: Maybe<UserContextEntity>;
  removeFavoriteEvent?: Maybe<UserContextEntity>;
  removeFavoriteOrganisation?: Maybe<UserContextEntity>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  saveAddress?: Maybe<AddressEntity>;
  saveAddresses?: Maybe<Array<Maybe<AddressEntity>>>;
  saveAdminFooterItem?: Maybe<AdminFooterItemEntity>;
  saveAdminFooterItems?: Maybe<Array<Maybe<AdminFooterItemEntity>>>;
  saveAdminFooterParent?: Maybe<AdminFooterParentEntity>;
  saveAdminFooterParents?: Maybe<Array<Maybe<AdminFooterParentEntity>>>;
  saveApp?: Maybe<AppEntity>;
  saveApps?: Maybe<Array<Maybe<AppEntity>>>;
  saveArticle?: Maybe<ArticleEntity>;
  saveArticleCategories?: Maybe<Array<Maybe<ArticleCategoryEntity>>>;
  saveArticleCategory?: Maybe<ArticleCategoryEntity>;
  saveArticleComment?: Maybe<ArticleCommentEntity>;
  saveArticleComments?: Maybe<Array<Maybe<ArticleCommentEntity>>>;
  saveArticleMedia?: Maybe<Array<Maybe<ArticleMediaEntity>>>;
  saveArticleMedium?: Maybe<ArticleMediaEntity>;
  saveArticlePublicAuthor?: Maybe<ArticlePublicAuthorEntity>;
  saveArticlePublicAuthors?: Maybe<Array<Maybe<ArticlePublicAuthorEntity>>>;
  saveArticleRating?: Maybe<ArticleRatingEntity>;
  saveArticleRatings?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
  saveArticles?: Maybe<Array<Maybe<ArticleEntity>>>;
  saveConfiguration?: Maybe<ConfigurationEntity>;
  saveConfigurations?: Maybe<Array<Maybe<ConfigurationEntity>>>;
  saveContact?: Maybe<ContactEntity>;
  saveContacts?: Maybe<Array<Maybe<ContactEntity>>>;
  saveContest?: Maybe<ContestEntity>;
  saveContestComment?: Maybe<ContestCommentEntity>;
  saveContestComments?: Maybe<Array<Maybe<ContestCommentEntity>>>;
  saveContestType?: Maybe<ContestTypeEntity>;
  saveContestTypes?: Maybe<Array<Maybe<ContestTypeEntity>>>;
  saveContestVote?: Maybe<ContestVoteEntity>;
  saveContestVotes?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  saveContests?: Maybe<Array<Maybe<ContestEntity>>>;
  saveDeal?: Maybe<DealEntity>;
  saveDealCategories?: Maybe<Array<Maybe<DealCategoryEntity>>>;
  saveDealCategory?: Maybe<DealCategoryEntity>;
  saveDealMedia?: Maybe<Array<Maybe<DealMediaEntity>>>;
  saveDealMedium?: Maybe<DealMediaEntity>;
  saveDeals?: Maybe<Array<Maybe<DealEntity>>>;
  saveErrorMessage?: Maybe<ErrorMessageEntity>;
  saveErrorMessages?: Maybe<Array<Maybe<ErrorMessageEntity>>>;
  saveEvent?: Maybe<EventEntity>;
  saveEventAttendee?: Maybe<EventAttendeeEntity>;
  saveEventAttendees?: Maybe<Array<Maybe<EventAttendeeEntity>>>;
  saveEventCategories?: Maybe<Array<Maybe<EventCategoryEntity>>>;
  saveEventCategory?: Maybe<EventCategoryEntity>;
  saveEventComment?: Maybe<EventCommentEntity>;
  saveEventComments?: Maybe<Array<Maybe<EventCommentEntity>>>;
  saveEventMedia?: Maybe<Array<Maybe<EventMediaEntity>>>;
  saveEventMedium?: Maybe<EventMediaEntity>;
  saveEventRating?: Maybe<EventRatingEntity>;
  saveEventRatings?: Maybe<Array<Maybe<EventRatingEntity>>>;
  saveEventSchedule?: Maybe<EventScheduleEntity>;
  saveEventSchedules?: Maybe<Array<Maybe<EventScheduleEntity>>>;
  saveEventTargetGroup?: Maybe<EventTargetGroupEntity>;
  saveEventTargetGroups?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  saveEvents?: Maybe<Array<Maybe<EventEntity>>>;
  saveFeature?: Maybe<FeatureEntity>;
  saveFeatures?: Maybe<Array<Maybe<FeatureEntity>>>;
  saveFriend?: Maybe<FriendEntity>;
  saveFriends?: Maybe<Array<Maybe<FriendEntity>>>;
  saveInfoMedia?: Maybe<Array<Maybe<InfoMediaEntity>>>;
  saveInfoMediaCategories?: Maybe<Array<Maybe<InfoMediaCategoryEntity>>>;
  saveInfoMediaCategory?: Maybe<InfoMediaCategoryEntity>;
  saveInfoMedium?: Maybe<InfoMediaEntity>;
  saveLabel?: Maybe<LabelEntity>;
  saveLabels?: Maybe<Array<Maybe<LabelEntity>>>;
  saveLanguage?: Maybe<LanguageEntity>;
  saveLanguages?: Maybe<Array<Maybe<LanguageEntity>>>;
  saveMe?: Maybe<UserEntity>;
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
  saveOrganisationMedia?: Maybe<Array<Maybe<OrganisationMediaEntity>>>;
  saveOrganisationMedium?: Maybe<OrganisationMediaEntity>;
  saveOrganisationMember?: Maybe<OrganisationMemberEntity>;
  saveOrganisationMembers?: Maybe<Array<Maybe<OrganisationMemberEntity>>>;
  saveOrganisationRating?: Maybe<OrganisationRatingEntity>;
  saveOrganisationRatings?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  saveOrganisations?: Maybe<Array<Maybe<OrganisationEntity>>>;
  savePage?: Maybe<PageEntity>;
  savePages?: Maybe<Array<Maybe<PageEntity>>>;
  savePrivilegeApplication?: Maybe<PrivilegeApplicationEntity>;
  savePrivilegeApplications?: Maybe<Array<Maybe<PrivilegeApplicationEntity>>>;
  saveQuestionOption?: Maybe<SurveyQuestionOptionEntity>;
  saveQuestionOptions?: Maybe<Array<Maybe<SurveyQuestionOptionEntity>>>;
  saveQuestionType?: Maybe<SurveyQuestionTypeEntity>;
  saveQuestionTypes?: Maybe<Array<Maybe<SurveyQuestionTypeEntity>>>;
  saveReport?: Maybe<ReportEntity>;
  saveReportType?: Maybe<ReportTypeEntity>;
  saveReportTypes?: Maybe<Array<Maybe<ReportTypeEntity>>>;
  saveReports?: Maybe<Array<Maybe<ReportEntity>>>;
  saveRole?: Maybe<RoleEntity>;
  saveRoles?: Maybe<Array<Maybe<RoleEntity>>>;
  saveSocialMedia?: Maybe<SocialMediaEntity>;
  saveSocialMedias?: Maybe<Array<Maybe<SocialMediaEntity>>>;
  saveSubscription?: Maybe<SubscriptionEntity>;
  saveSubscriptions?: Maybe<Array<Maybe<SubscriptionEntity>>>;
  saveSuburb?: Maybe<SuburbEntity>;
  saveSuburbs?: Maybe<Array<Maybe<SuburbEntity>>>;
  saveSurvey?: Maybe<SurveyEntity>;
  saveSurveyAnswer?: Maybe<SurveyAnswerEntity>;
  saveSurveyAnswers?: Maybe<Array<Maybe<SurveyAnswerEntity>>>;
  saveSurveyAssignment?: Maybe<SurveyAssignmentEntity>;
  saveSurveyAssignments?: Maybe<Array<Maybe<SurveyAssignmentEntity>>>;
  saveSurveyQuestion?: Maybe<SurveyQuestionEntity>;
  saveSurveyQuestions?: Maybe<Array<Maybe<SurveyQuestionEntity>>>;
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
  sponsorArticle?: Maybe<Scalars['Boolean']>;
  sponsorContest?: Maybe<Scalars['Boolean']>;
  sponsorDeal?: Maybe<Scalars['Boolean']>;
  sponsorEvent?: Maybe<Scalars['Boolean']>;
  sponsorOrganisation?: Maybe<Scalars['Boolean']>;
  sponsorSurvey?: Maybe<Scalars['Boolean']>;
  verify?: Maybe<UserEntity>;
  verifyAddress?: Maybe<AddressEntity>;
};


/** Mutation root */
export type MutationAddFavoriteArticleArgs = {
  articleId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAddFavoriteAuthorArgs = {
  userContextId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAddFavoriteDealArgs = {
  dealId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAddFavoriteEventArgs = {
  eventId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationAddFavoriteOrganisationArgs = {
  organisationId?: InputMaybe<Scalars['String']>;
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
export type MutationDeleteAdminFooterItemArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAdminFooterItemsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteAdminFooterParentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteAdminFooterParentsArgs = {
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
export type MutationDeleteArticleMediaArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteArticleMediumArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteArticlePublicAuthorArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteArticlePublicAuthorsArgs = {
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
export type MutationDeleteContestCommentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteContestCommentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
export type MutationDeleteDealMediaArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteDealMediumArgs = {
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
export type MutationDeleteEventAttendeeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventAttendeesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
export type MutationDeleteEventMediaArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteEventMediumArgs = {
  id?: InputMaybe<Scalars['String']>;
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
export type MutationDeleteEventScheduleArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteEventSchedulesArgs = {
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
export type MutationDeleteFeatureArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteFeaturesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteFriendArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteFriendsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteInfoMediaArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteInfoMediaCategoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteInfoMediaCategoryArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteInfoMediumArgs = {
  id?: InputMaybe<Scalars['String']>;
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
export type MutationDeleteOrganisationMediaArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteOrganisationMediumArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteOrganisationMemberArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteOrganisationMembersArgs = {
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
export type MutationDeletePrivilegeApplicationArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeletePrivilegeApplicationsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
export type MutationDeleteSurveyAnswerArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSurveyAnswersArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSurveyAssignmentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSurveyAssignmentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Mutation root */
export type MutationDeleteSurveyQuestionArgs = {
  id?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationDeleteSurveyQuestionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
export type MutationRemoveFavoriteArticleArgs = {
  articleId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationRemoveFavoriteAuthorArgs = {
  userContextId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationRemoveFavoriteDealArgs = {
  dealId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationRemoveFavoriteEventArgs = {
  eventId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationRemoveFavoriteOrganisationArgs = {
  organisationId?: InputMaybe<Scalars['String']>;
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
export type MutationSaveAdminFooterItemArgs = {
  entity?: InputMaybe<AdminFooterItemEntityInput>;
};


/** Mutation root */
export type MutationSaveAdminFooterItemsArgs = {
  entities?: InputMaybe<Array<InputMaybe<AdminFooterItemEntityInput>>>;
};


/** Mutation root */
export type MutationSaveAdminFooterParentArgs = {
  entity?: InputMaybe<AdminFooterParentEntityInput>;
};


/** Mutation root */
export type MutationSaveAdminFooterParentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<AdminFooterParentEntityInput>>>;
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
export type MutationSaveArticleMediaArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticleMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveArticleMediumArgs = {
  entity?: InputMaybe<ArticleMediaEntityInput>;
};


/** Mutation root */
export type MutationSaveArticlePublicAuthorArgs = {
  entity?: InputMaybe<ArticlePublicAuthorEntityInput>;
};


/** Mutation root */
export type MutationSaveArticlePublicAuthorsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ArticlePublicAuthorEntityInput>>>;
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
export type MutationSaveContestCommentArgs = {
  entity?: InputMaybe<ContestCommentEntityInput>;
};


/** Mutation root */
export type MutationSaveContestCommentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<ContestCommentEntityInput>>>;
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
export type MutationSaveDealMediaArgs = {
  entities?: InputMaybe<Array<InputMaybe<DealMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveDealMediumArgs = {
  entity?: InputMaybe<DealMediaEntityInput>;
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
export type MutationSaveEventAttendeeArgs = {
  entity?: InputMaybe<EventAttendeeEntityInput>;
};


/** Mutation root */
export type MutationSaveEventAttendeesArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventAttendeeEntityInput>>>;
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
export type MutationSaveEventMediaArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveEventMediumArgs = {
  entity?: InputMaybe<EventMediaEntityInput>;
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
export type MutationSaveEventScheduleArgs = {
  entity?: InputMaybe<EventScheduleEntityInput>;
};


/** Mutation root */
export type MutationSaveEventSchedulesArgs = {
  entities?: InputMaybe<Array<InputMaybe<EventScheduleEntityInput>>>;
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
export type MutationSaveFeatureArgs = {
  entity?: InputMaybe<FeatureEntityInput>;
};


/** Mutation root */
export type MutationSaveFeaturesArgs = {
  entities?: InputMaybe<Array<InputMaybe<FeatureEntityInput>>>;
};


/** Mutation root */
export type MutationSaveFriendArgs = {
  entity?: InputMaybe<FriendEntityInput>;
};


/** Mutation root */
export type MutationSaveFriendsArgs = {
  entities?: InputMaybe<Array<InputMaybe<FriendEntityInput>>>;
};


/** Mutation root */
export type MutationSaveInfoMediaArgs = {
  entities?: InputMaybe<Array<InputMaybe<InfoMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveInfoMediaCategoriesArgs = {
  entities?: InputMaybe<Array<InputMaybe<InfoMediaCategoryEntityInput>>>;
};


/** Mutation root */
export type MutationSaveInfoMediaCategoryArgs = {
  entity?: InputMaybe<InfoMediaCategoryEntityInput>;
};


/** Mutation root */
export type MutationSaveInfoMediumArgs = {
  entity?: InputMaybe<InfoMediaEntityInput>;
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
export type MutationSaveOrganisationMediaArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganisationMediaEntityInput>>>;
};


/** Mutation root */
export type MutationSaveOrganisationMediumArgs = {
  entity?: InputMaybe<OrganisationMediaEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganisationMemberArgs = {
  entity?: InputMaybe<OrganisationMemberEntityInput>;
};


/** Mutation root */
export type MutationSaveOrganisationMembersArgs = {
  entities?: InputMaybe<Array<InputMaybe<OrganisationMemberEntityInput>>>;
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
export type MutationSavePrivilegeApplicationArgs = {
  entity?: InputMaybe<PrivilegeApplicationEntityInput>;
};


/** Mutation root */
export type MutationSavePrivilegeApplicationsArgs = {
  entities?: InputMaybe<Array<InputMaybe<PrivilegeApplicationEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionOptionArgs = {
  entity?: InputMaybe<SurveyQuestionOptionEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionOptionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyQuestionOptionEntityInput>>>;
};


/** Mutation root */
export type MutationSaveQuestionTypeArgs = {
  entity?: InputMaybe<SurveyQuestionTypeEntityInput>;
};


/** Mutation root */
export type MutationSaveQuestionTypesArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyQuestionTypeEntityInput>>>;
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
export type MutationSaveSurveyAnswerArgs = {
  entity?: InputMaybe<SurveyAnswerEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyAnswersArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyAnswerEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSurveyAssignmentArgs = {
  entity?: InputMaybe<SurveyAssignmentEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyAssignmentsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyAssignmentEntityInput>>>;
};


/** Mutation root */
export type MutationSaveSurveyQuestionArgs = {
  entity?: InputMaybe<SurveyQuestionEntityInput>;
};


/** Mutation root */
export type MutationSaveSurveyQuestionsArgs = {
  entities?: InputMaybe<Array<InputMaybe<SurveyQuestionEntityInput>>>;
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
export type MutationSponsorArticleArgs = {
  articleId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSponsorContestArgs = {
  contestId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSponsorDealArgs = {
  dealId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSponsorEventArgs = {
  eventId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSponsorOrganisationArgs = {
  organisationId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationSponsorSurveyArgs = {
  surveyId?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationVerifyArgs = {
  token?: InputMaybe<Scalars['String']>;
};


/** Mutation root */
export type MutationVerifyAddressArgs = {
  entity?: InputMaybe<AddressEntityInput>;
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
  favoritingUsers?: Maybe<Array<Maybe<UserContextEntity>>>;
  id?: Maybe<Scalars['String']>;
  lastOrganisationComment?: Maybe<OrganisationCommentEntity>;
  members?: Maybe<Array<Maybe<OrganisationMemberEntity>>>;
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
  favoritingUsers?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<InputMaybe<OrganisationMemberEntityInput>>>;
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

export type OrganisationMemberEntity = {
  __typename?: 'OrganisationMemberEntity';
  approved?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisation?: Maybe<OrganisationEntity>;
  userContext?: Maybe<UserContextEntity>;
};

export type OrganisationMemberEntityInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisation?: InputMaybe<OrganisationEntityInput>;
  userContext?: InputMaybe<UserContextEntityInput>;
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

export type PageEmbeddingEntity = {
  __typename?: 'PageEmbeddingEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  feature?: Maybe<FeatureEntity>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  order?: Maybe<Scalars['Int']>;
  page?: Maybe<PageEntity>;
};

export type PageEmbeddingEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  feature?: InputMaybe<FeatureEntityInput>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  order?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<PageEntityInput>;
};

export type PageEntity = {
  __typename?: 'PageEntity';
  callText?: Maybe<Scalars['String']>;
  callUrl?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  embeddings?: Maybe<Array<Maybe<PageEmbeddingEntity>>>;
  id?: Maybe<Scalars['String']>;
  isLanding?: Maybe<Scalars['Boolean']>;
  menuItems?: Maybe<Array<Maybe<MenuItemEntity>>>;
  metaDescription?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
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
  embeddings?: InputMaybe<Array<InputMaybe<PageEmbeddingEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  isLanding?: InputMaybe<Scalars['Boolean']>;
  menuItems?: InputMaybe<Array<InputMaybe<MenuItemEntityInput>>>;
  metaDescription?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<PageTranslatableEntityInput>>>;
  uploads?: InputMaybe<Array<InputMaybe<PageMediaEntityInput>>>;
  visitors?: InputMaybe<Array<InputMaybe<PageVisitorEntityInput>>>;
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

export type PageableList_AdminFooterItemEntity = {
  __typename?: 'PageableList_AdminFooterItemEntity';
  result?: Maybe<Array<Maybe<AdminFooterItemEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_AdminFooterParentEntity = {
  __typename?: 'PageableList_AdminFooterParentEntity';
  result?: Maybe<Array<Maybe<AdminFooterParentEntity>>>;
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

export type PageableList_ArticleMediaEntity = {
  __typename?: 'PageableList_ArticleMediaEntity';
  result?: Maybe<Array<Maybe<ArticleMediaEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ArticlePublicAuthorEntity = {
  __typename?: 'PageableList_ArticlePublicAuthorEntity';
  result?: Maybe<Array<Maybe<ArticlePublicAuthorEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ArticleRatingEntity = {
  __typename?: 'PageableList_ArticleRatingEntity';
  result?: Maybe<Array<Maybe<ArticleRatingEntity>>>;
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

export type PageableList_ContestCommentEntity = {
  __typename?: 'PageableList_ContestCommentEntity';
  result?: Maybe<Array<Maybe<ContestCommentEntity>>>;
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

export type PageableList_DealMediaEntity = {
  __typename?: 'PageableList_DealMediaEntity';
  result?: Maybe<Array<Maybe<DealMediaEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_ErrorMessageEntity = {
  __typename?: 'PageableList_ErrorMessageEntity';
  result?: Maybe<Array<Maybe<ErrorMessageEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventAttendeeEntity = {
  __typename?: 'PageableList_EventAttendeeEntity';
  result?: Maybe<Array<Maybe<EventAttendeeEntity>>>;
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

export type PageableList_EventMediaEntity = {
  __typename?: 'PageableList_EventMediaEntity';
  result?: Maybe<Array<Maybe<EventMediaEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventRatingEntity = {
  __typename?: 'PageableList_EventRatingEntity';
  result?: Maybe<Array<Maybe<EventRatingEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventScheduleEntity = {
  __typename?: 'PageableList_EventScheduleEntity';
  result?: Maybe<Array<Maybe<EventScheduleEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_EventTargetGroupEntity = {
  __typename?: 'PageableList_EventTargetGroupEntity';
  result?: Maybe<Array<Maybe<EventTargetGroupEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_FeatureEntity = {
  __typename?: 'PageableList_FeatureEntity';
  result?: Maybe<Array<Maybe<FeatureEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_FriendEntity = {
  __typename?: 'PageableList_FriendEntity';
  result?: Maybe<Array<Maybe<FriendEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_InfoMediaCategoryEntity = {
  __typename?: 'PageableList_InfoMediaCategoryEntity';
  result?: Maybe<Array<Maybe<InfoMediaCategoryEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_InfoMediaEntity = {
  __typename?: 'PageableList_InfoMediaEntity';
  result?: Maybe<Array<Maybe<InfoMediaEntity>>>;
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

export type PageableList_OrganisationMediaEntity = {
  __typename?: 'PageableList_OrganisationMediaEntity';
  result?: Maybe<Array<Maybe<OrganisationMediaEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_OrganisationMemberEntity = {
  __typename?: 'PageableList_OrganisationMemberEntity';
  result?: Maybe<Array<Maybe<OrganisationMemberEntity>>>;
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

export type PageableList_PrivilegeApplicationEntity = {
  __typename?: 'PageableList_PrivilegeApplicationEntity';
  result?: Maybe<Array<Maybe<PrivilegeApplicationEntity>>>;
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

export type PageableList_SurveyAnswerEntity = {
  __typename?: 'PageableList_SurveyAnswerEntity';
  result?: Maybe<Array<Maybe<SurveyAnswerEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SurveyAssignmentEntity = {
  __typename?: 'PageableList_SurveyAssignmentEntity';
  result?: Maybe<Array<Maybe<SurveyAssignmentEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SurveyEntity = {
  __typename?: 'PageableList_SurveyEntity';
  result?: Maybe<Array<Maybe<SurveyEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SurveyQuestionEntity = {
  __typename?: 'PageableList_SurveyQuestionEntity';
  result?: Maybe<Array<Maybe<SurveyQuestionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SurveyQuestionOptionEntity = {
  __typename?: 'PageableList_SurveyQuestionOptionEntity';
  result?: Maybe<Array<Maybe<SurveyQuestionOptionEntity>>>;
  total: Scalars['Long'];
};

export type PageableList_SurveyQuestionTypeEntity = {
  __typename?: 'PageableList_SurveyQuestionTypeEntity';
  result?: Maybe<Array<Maybe<SurveyQuestionTypeEntity>>>;
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

export type PrivilegeApplicationEntity = {
  __typename?: 'PrivilegeApplicationEntity';
  accepted?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  privilege?: Maybe<RolePrivilegeEntity>;
  translatables?: Maybe<Array<Maybe<PrivilegeApplicationTranslatableEntity>>>;
  user?: Maybe<UserEntity>;
};

export type PrivilegeApplicationEntityInput = {
  accepted?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  privilege?: InputMaybe<RolePrivilegeEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<PrivilegeApplicationTranslatableEntityInput>>>;
  user?: InputMaybe<UserEntityInput>;
};

export type PrivilegeApplicationTranslatableEntity = {
  __typename?: 'PrivilegeApplicationTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  parent?: Maybe<PrivilegeApplicationEntity>;
};

export type PrivilegeApplicationTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  parent?: InputMaybe<PrivilegeApplicationEntityInput>;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  getAddress?: Maybe<AddressEntity>;
  getAddresses?: Maybe<PageableList_AddressEntity>;
  getAdminFooterItem?: Maybe<AdminFooterItemEntity>;
  getAdminFooterItems?: Maybe<PageableList_AdminFooterItemEntity>;
  getAdminFooterParent?: Maybe<AdminFooterParentEntity>;
  getAdminFooterParents?: Maybe<PageableList_AdminFooterParentEntity>;
  getApp?: Maybe<AppEntity>;
  getApps?: Maybe<PageableList_AppEntity>;
  getArticle?: Maybe<ArticleEntity>;
  getArticleCategories?: Maybe<PageableList_ArticleCategoryEntity>;
  getArticleCategory?: Maybe<ArticleCategoryEntity>;
  getArticleComment?: Maybe<ArticleCommentEntity>;
  getArticleComments?: Maybe<PageableList_ArticleCommentEntity>;
  getArticleMedia?: Maybe<PageableList_ArticleMediaEntity>;
  getArticleMedium?: Maybe<ArticleMediaEntity>;
  getArticlePublicAuthor?: Maybe<ArticlePublicAuthorEntity>;
  getArticlePublicAuthors?: Maybe<PageableList_ArticlePublicAuthorEntity>;
  getArticleRating?: Maybe<ArticleRatingEntity>;
  getArticleRatings?: Maybe<PageableList_ArticleRatingEntity>;
  getArticles?: Maybe<PageableList_ArticleEntity>;
  getConfiguration?: Maybe<ConfigurationEntity>;
  getConfigurations?: Maybe<PageableList_ConfigurationEntity>;
  getContact?: Maybe<ContactEntity>;
  getContacts?: Maybe<PageableList_ContactEntity>;
  getContest?: Maybe<ContestEntity>;
  getContestComment?: Maybe<ContestCommentEntity>;
  getContestComments?: Maybe<PageableList_ContestCommentEntity>;
  getContestType?: Maybe<ContestTypeEntity>;
  getContestTypes?: Maybe<PageableList_ContestTypeEntity>;
  getContestVote?: Maybe<ContestVoteEntity>;
  getContestVotes?: Maybe<PageableList_ContestVoteEntity>;
  getContests?: Maybe<PageableList_ContestEntity>;
  getDeal?: Maybe<DealEntity>;
  getDealCategories?: Maybe<PageableList_DealCategoryEntity>;
  getDealCategory?: Maybe<DealCategoryEntity>;
  getDealMedia?: Maybe<PageableList_DealMediaEntity>;
  getDealMedium?: Maybe<DealMediaEntity>;
  getDeals?: Maybe<PageableList_DealEntity>;
  getErrorMessage?: Maybe<ErrorMessageEntity>;
  getErrorMessages?: Maybe<PageableList_ErrorMessageEntity>;
  getEvent?: Maybe<EventEntity>;
  getEventAttendee?: Maybe<EventAttendeeEntity>;
  getEventAttendees?: Maybe<PageableList_EventAttendeeEntity>;
  getEventCategories?: Maybe<PageableList_EventCategoryEntity>;
  getEventCategory?: Maybe<EventCategoryEntity>;
  getEventComment?: Maybe<EventCommentEntity>;
  getEventComments?: Maybe<PageableList_EventCommentEntity>;
  getEventMedia?: Maybe<PageableList_EventMediaEntity>;
  getEventMedium?: Maybe<EventMediaEntity>;
  getEventRating?: Maybe<EventRatingEntity>;
  getEventRatings?: Maybe<PageableList_EventRatingEntity>;
  getEventSchedule?: Maybe<EventScheduleEntity>;
  getEventSchedules?: Maybe<PageableList_EventScheduleEntity>;
  getEventTargetGroup?: Maybe<EventTargetGroupEntity>;
  getEventTargetGroups?: Maybe<PageableList_EventTargetGroupEntity>;
  getEvents?: Maybe<PageableList_EventEntity>;
  getFeature?: Maybe<FeatureEntity>;
  getFeatures?: Maybe<PageableList_FeatureEntity>;
  getFriend?: Maybe<FriendEntity>;
  getFriends?: Maybe<PageableList_FriendEntity>;
  getInfoMedia?: Maybe<PageableList_InfoMediaEntity>;
  getInfoMediaCategories?: Maybe<PageableList_InfoMediaCategoryEntity>;
  getInfoMediaCategory?: Maybe<InfoMediaCategoryEntity>;
  getInfoMedium?: Maybe<InfoMediaEntity>;
  getInformation?: Maybe<InformationDto>;
  getLabel?: Maybe<LabelEntity>;
  getLabels?: Maybe<PageableList_LabelEntity>;
  getLanguage?: Maybe<LanguageEntity>;
  getLanguages?: Maybe<PageableList_LanguageEntity>;
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
  getOrganisationMedia?: Maybe<PageableList_OrganisationMediaEntity>;
  getOrganisationMedium?: Maybe<OrganisationMediaEntity>;
  getOrganisationMember?: Maybe<OrganisationMemberEntity>;
  getOrganisationMembers?: Maybe<PageableList_OrganisationMemberEntity>;
  getOrganisationRating?: Maybe<OrganisationRatingEntity>;
  getOrganisationRatings?: Maybe<PageableList_OrganisationRatingEntity>;
  getOrganisations?: Maybe<PageableList_OrganisationEntity>;
  getPage?: Maybe<PageEntity>;
  getPages?: Maybe<PageableList_PageEntity>;
  getPrivilegeApplication?: Maybe<PrivilegeApplicationEntity>;
  getPrivilegeApplications?: Maybe<PageableList_PrivilegeApplicationEntity>;
  getQuestionOption?: Maybe<SurveyQuestionOptionEntity>;
  getQuestionOptions?: Maybe<PageableList_SurveyQuestionOptionEntity>;
  getQuestionType?: Maybe<SurveyQuestionTypeEntity>;
  getQuestionTypes?: Maybe<PageableList_SurveyQuestionTypeEntity>;
  getReport?: Maybe<ReportEntity>;
  getReportType?: Maybe<ReportTypeEntity>;
  getReportTypes?: Maybe<PageableList_ReportTypeEntity>;
  getReports?: Maybe<PageableList_ReportEntity>;
  getRole?: Maybe<RoleEntity>;
  getRoles?: Maybe<PageableList_RoleEntity>;
  getSearchStatistics?: Maybe<Array<Maybe<AnalyticsDto>>>;
  getSocialMedia?: Maybe<SocialMediaEntity>;
  getSocialMedias?: Maybe<PageableList_SocialMediaEntity>;
  getSubscription?: Maybe<SubscriptionEntity>;
  getSubscriptions?: Maybe<PageableList_SubscriptionEntity>;
  getSuburb?: Maybe<SuburbEntity>;
  getSuburbs?: Maybe<PageableList_SuburbEntity>;
  getSurvey?: Maybe<SurveyEntity>;
  getSurveyAnswer?: Maybe<SurveyAnswerEntity>;
  getSurveyAnswers?: Maybe<PageableList_SurveyAnswerEntity>;
  getSurveyAssignment?: Maybe<SurveyAssignmentEntity>;
  getSurveyAssignments?: Maybe<PageableList_SurveyAssignmentEntity>;
  getSurveyQuestion?: Maybe<SurveyQuestionEntity>;
  getSurveyQuestions?: Maybe<PageableList_SurveyQuestionEntity>;
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
export type QueryGetAdminFooterItemArgs = {
  entity?: InputMaybe<AdminFooterItemEntityInput>;
};


/** Query root */
export type QueryGetAdminFooterItemsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetAdminFooterParentArgs = {
  entity?: InputMaybe<AdminFooterParentEntityInput>;
};


/** Query root */
export type QueryGetAdminFooterParentsArgs = {
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
export type QueryGetArticleMediaArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetArticleMediumArgs = {
  entity?: InputMaybe<ArticleMediaEntityInput>;
};


/** Query root */
export type QueryGetArticlePublicAuthorArgs = {
  entity?: InputMaybe<ArticlePublicAuthorEntityInput>;
};


/** Query root */
export type QueryGetArticlePublicAuthorsArgs = {
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
export type QueryGetContestCommentArgs = {
  entity?: InputMaybe<ContestCommentEntityInput>;
};


/** Query root */
export type QueryGetContestCommentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
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
export type QueryGetDealMediaArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetDealMediumArgs = {
  entity?: InputMaybe<DealMediaEntityInput>;
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
export type QueryGetEventAttendeeArgs = {
  entity?: InputMaybe<EventAttendeeEntityInput>;
};


/** Query root */
export type QueryGetEventAttendeesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
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
export type QueryGetEventMediaArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetEventMediumArgs = {
  entity?: InputMaybe<EventMediaEntityInput>;
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
export type QueryGetEventScheduleArgs = {
  entity?: InputMaybe<EventScheduleEntityInput>;
};


/** Query root */
export type QueryGetEventSchedulesArgs = {
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
export type QueryGetFeatureArgs = {
  entity?: InputMaybe<FeatureEntityInput>;
};


/** Query root */
export type QueryGetFeaturesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetFriendArgs = {
  entity?: InputMaybe<FriendEntityInput>;
};


/** Query root */
export type QueryGetFriendsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetInfoMediaArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetInfoMediaCategoriesArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetInfoMediaCategoryArgs = {
  entity?: InputMaybe<InfoMediaCategoryEntityInput>;
};


/** Query root */
export type QueryGetInfoMediumArgs = {
  entity?: InputMaybe<InfoMediaEntityInput>;
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
export type QueryGetOrganisationMediaArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetOrganisationMediumArgs = {
  entity?: InputMaybe<OrganisationMediaEntityInput>;
};


/** Query root */
export type QueryGetOrganisationMemberArgs = {
  entity?: InputMaybe<OrganisationMemberEntityInput>;
};


/** Query root */
export type QueryGetOrganisationMembersArgs = {
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
export type QueryGetPrivilegeApplicationArgs = {
  entity?: InputMaybe<PrivilegeApplicationEntityInput>;
};


/** Query root */
export type QueryGetPrivilegeApplicationsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionOptionArgs = {
  entity?: InputMaybe<SurveyQuestionOptionEntityInput>;
};


/** Query root */
export type QueryGetQuestionOptionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetQuestionTypeArgs = {
  entity?: InputMaybe<SurveyQuestionTypeEntityInput>;
};


/** Query root */
export type QueryGetQuestionTypesArgs = {
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
export type QueryGetSearchStatisticsArgs = {
  dimension?: InputMaybe<SearchConsoleDimension>;
  endDate?: InputMaybe<Scalars['OffsetDateTime']>;
  filter?: InputMaybe<IntervalFilter>;
  startDate?: InputMaybe<Scalars['OffsetDateTime']>;
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
export type QueryGetSurveyAnswerArgs = {
  entity?: InputMaybe<SurveyAnswerEntityInput>;
};


/** Query root */
export type QueryGetSurveyAnswersArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSurveyAssignmentArgs = {
  entity?: InputMaybe<SurveyAssignmentEntityInput>;
};


/** Query root */
export type QueryGetSurveyAssignmentsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
};


/** Query root */
export type QueryGetSurveyQuestionArgs = {
  entity?: InputMaybe<SurveyQuestionEntityInput>;
};


/** Query root */
export type QueryGetSurveyQuestionsArgs = {
  params?: InputMaybe<FilterSortPaginateInput>;
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
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  privileges?: Maybe<Array<Maybe<RolePrivilegeEntity>>>;
  translatables?: Maybe<Array<Maybe<RoleTranslatableEntity>>>;
  users?: Maybe<Array<Maybe<UserEntity>>>;
};

export type RoleEntityInput = {
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  privileges?: InputMaybe<Array<InputMaybe<RolePrivilegeEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<RoleTranslatableEntityInput>>>;
  users?: InputMaybe<Array<InputMaybe<UserEntityInput>>>;
};

export type RolePrivilegeEntity = {
  __typename?: 'RolePrivilegeEntity';
  applications?: Maybe<Array<Maybe<PrivilegeApplicationEntity>>>;
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<RolePrivilegeTranslatableEntity>>>;
};

export type RolePrivilegeEntityInput = {
  applications?: InputMaybe<Array<InputMaybe<PrivilegeApplicationEntityInput>>>;
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<RolePrivilegeTranslatableEntityInput>>>;
};

export type RolePrivilegeTranslatableEntity = {
  __typename?: 'RolePrivilegeTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<RolePrivilegeEntity>;
};

export type RolePrivilegeTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageEntityInput>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<RolePrivilegeEntityInput>;
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

export enum SearchConsoleDimension {
  Country = 'country',
  Date = 'date',
  Device = 'device',
  Page = 'page',
  Query = 'query'
}

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
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type SuburbEntityInput = {
  addresses?: InputMaybe<Array<InputMaybe<AddressEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SurveyAnswerEntity = {
  __typename?: 'SurveyAnswerEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  question?: Maybe<SurveyQuestionEntity>;
  result?: Maybe<SurveyResultEntity>;
  selectedOptions?: Maybe<Array<Maybe<SurveyQuestionOptionEntity>>>;
  translatables?: Maybe<Array<Maybe<SurveyAnswerTranslatableEntity>>>;
};

export type SurveyAnswerEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  question?: InputMaybe<SurveyQuestionEntityInput>;
  result?: InputMaybe<SurveyResultEntityInput>;
  selectedOptions?: InputMaybe<Array<InputMaybe<SurveyQuestionOptionEntityInput>>>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyAnswerTranslatableEntityInput>>>;
};

export type SurveyAnswerTranslatableEntity = {
  __typename?: 'SurveyAnswerTranslatableEntity';
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type SurveyAnswerTranslatableEntityInput = {
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type SurveyAssignmentEntity = {
  __typename?: 'SurveyAssignmentEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  survey?: Maybe<SurveyEntity>;
  userContext?: Maybe<UserContextEntity>;
};

export type SurveyAssignmentEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  survey?: InputMaybe<SurveyEntityInput>;
  userContext?: InputMaybe<UserContextEntityInput>;
};

export type SurveyEntity = {
  __typename?: 'SurveyEntity';
  assignments?: Maybe<Array<Maybe<SurveyAssignmentEntity>>>;
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
  assignments?: InputMaybe<Array<InputMaybe<SurveyAssignmentEntityInput>>>;
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

export type SurveyQuestionEntity = {
  __typename?: 'SurveyQuestionEntity';
  answers?: Maybe<Array<Maybe<SurveyAnswerEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  order?: Maybe<Scalars['Int']>;
  questionOptions?: Maybe<Array<Maybe<SurveyQuestionOptionEntity>>>;
  subject?: Maybe<Scalars['String']>;
  translatables?: Maybe<Array<Maybe<SurveyQuestionTranslatableEntity>>>;
  type?: Maybe<SurveyQuestionTypeEntity>;
};

export type SurveyQuestionEntityInput = {
  answers?: InputMaybe<Array<InputMaybe<SurveyAnswerEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  order?: InputMaybe<Scalars['Int']>;
  questionOptions?: InputMaybe<Array<InputMaybe<SurveyQuestionOptionEntityInput>>>;
  subject?: InputMaybe<Scalars['String']>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyQuestionTranslatableEntityInput>>>;
  type?: InputMaybe<SurveyQuestionTypeEntityInput>;
};

export type SurveyQuestionOptionEntity = {
  __typename?: 'SurveyQuestionOptionEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  order?: Maybe<Scalars['Int']>;
  question?: Maybe<SurveyQuestionEntity>;
  translatables?: Maybe<Array<Maybe<SurveyQuestionOptionTranslatableEntity>>>;
};

export type SurveyQuestionOptionEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  order?: InputMaybe<Scalars['Int']>;
  question?: InputMaybe<SurveyQuestionEntityInput>;
  translatables?: InputMaybe<Array<InputMaybe<SurveyQuestionOptionTranslatableEntityInput>>>;
};

export type SurveyQuestionOptionTranslatableEntity = {
  __typename?: 'SurveyQuestionOptionTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
};

export type SurveyQuestionOptionTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
};

export type SurveyQuestionTranslatableEntity = {
  __typename?: 'SurveyQuestionTranslatableEntity';
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageEntity>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  subject?: Maybe<Scalars['String']>;
};

export type SurveyQuestionTranslatableEntityInput = {
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  subject?: InputMaybe<Scalars['String']>;
};

export type SurveyQuestionTypeEntity = {
  __typename?: 'SurveyQuestionTypeEntity';
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  questions?: Maybe<Array<Maybe<SurveyQuestionEntity>>>;
};

export type SurveyQuestionTypeEntityInput = {
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  questions?: InputMaybe<Array<InputMaybe<SurveyQuestionEntityInput>>>;
};

export type SurveyResultEntity = {
  __typename?: 'SurveyResultEntity';
  answer?: Maybe<Array<Maybe<SurveyAnswerEntity>>>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  survey?: Maybe<SurveyEntity>;
  translatables?: Maybe<Array<Maybe<SurveyResultTranslatableEntity>>>;
  userContext?: Maybe<UserContextEntity>;
};

export type SurveyResultEntityInput = {
  answer?: InputMaybe<Array<InputMaybe<SurveyAnswerEntityInput>>>;
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
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  survey?: Maybe<Array<Maybe<SurveyEntity>>>;
};

export type SurveyStateEntityInput = {
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
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
  code?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  id?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  theme?: Maybe<ThemeEntity>;
  value?: Maybe<Scalars['String']>;
};

export type ThemeVariableEntityInput = {
  code?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  id?: InputMaybe<Scalars['String']>;
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
  assignments?: Maybe<Array<Maybe<SurveyAssignmentEntity>>>;
  attendedEvents?: Maybe<Array<Maybe<EventAttendeeEntity>>>;
  contacts?: Maybe<Array<Maybe<ContactEntity>>>;
  contestPariticpations?: Maybe<Array<Maybe<ContestParticipationEntity>>>;
  contestVotes?: Maybe<Array<Maybe<ContestVoteEntity>>>;
  created?: Maybe<Scalars['OffsetDateTime']>;
  deals?: Maybe<Array<Maybe<DealEntity>>>;
  description?: Maybe<Scalars['String']>;
  eventComment?: Maybe<Array<Maybe<EventCommentEntity>>>;
  eventRatings?: Maybe<Array<Maybe<EventRatingEntity>>>;
  events?: Maybe<Array<Maybe<EventEntity>>>;
  favoriteArticles?: Maybe<Array<Maybe<ArticleEntity>>>;
  favoriteAuthors?: Maybe<Array<Maybe<UserContextEntity>>>;
  favoriteDeals?: Maybe<Array<Maybe<DealEntity>>>;
  favoriteEvents?: Maybe<Array<Maybe<EventEntity>>>;
  favoriteOrganisations?: Maybe<Array<Maybe<OrganisationEntity>>>;
  favoritingUsers?: Maybe<Array<Maybe<UserContextEntity>>>;
  id?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<OrganisationMemberEntity>>>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  organisationRatings?: Maybe<Array<Maybe<OrganisationRatingEntity>>>;
  receivedFriendRequests?: Maybe<Array<Maybe<FriendEntity>>>;
  sentFriendRequests?: Maybe<Array<Maybe<FriendEntity>>>;
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
  assignments?: InputMaybe<Array<InputMaybe<SurveyAssignmentEntityInput>>>;
  attendedEvents?: InputMaybe<Array<InputMaybe<EventAttendeeEntityInput>>>;
  contacts?: InputMaybe<Array<InputMaybe<ContactEntityInput>>>;
  contestPariticpations?: InputMaybe<Array<InputMaybe<ContestParticipationEntityInput>>>;
  contestVotes?: InputMaybe<Array<InputMaybe<ContestVoteEntityInput>>>;
  created?: InputMaybe<Scalars['OffsetDateTime']>;
  deals?: InputMaybe<Array<InputMaybe<DealEntityInput>>>;
  description?: InputMaybe<Scalars['String']>;
  eventComment?: InputMaybe<Array<InputMaybe<EventCommentEntityInput>>>;
  eventRatings?: InputMaybe<Array<InputMaybe<EventRatingEntityInput>>>;
  events?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoriteArticles?: InputMaybe<Array<InputMaybe<ArticleEntityInput>>>;
  favoriteAuthors?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  favoriteDeals?: InputMaybe<Array<InputMaybe<DealEntityInput>>>;
  favoriteEvents?: InputMaybe<Array<InputMaybe<EventEntityInput>>>;
  favoriteOrganisations?: InputMaybe<Array<InputMaybe<OrganisationEntityInput>>>;
  favoritingUsers?: InputMaybe<Array<InputMaybe<UserContextEntityInput>>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<InputMaybe<OrganisationMemberEntityInput>>>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  organisationRatings?: InputMaybe<Array<InputMaybe<OrganisationRatingEntityInput>>>;
  receivedFriendRequests?: InputMaybe<Array<InputMaybe<FriendEntityInput>>>;
  sentFriendRequests?: InputMaybe<Array<InputMaybe<FriendEntityInput>>>;
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
  lastLogin?: Maybe<Scalars['OffsetDateTime']>;
  lastName?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['OffsetDateTime']>;
  notifications?: Maybe<Array<Maybe<NotificationEntity>>>;
  password?: Maybe<Scalars['String']>;
  passwordResets?: Maybe<Array<Maybe<PasswordResetEntity>>>;
  phone?: Maybe<Scalars['String']>;
  privilegeApplications?: Maybe<Array<Maybe<PrivilegeApplicationEntity>>>;
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
  lastLogin?: InputMaybe<Scalars['OffsetDateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['OffsetDateTime']>;
  notifications?: InputMaybe<Array<InputMaybe<NotificationEntityInput>>>;
  password?: InputMaybe<Scalars['String']>;
  passwordResets?: InputMaybe<Array<InputMaybe<PasswordResetEntityInput>>>;
  phone?: InputMaybe<Scalars['String']>;
  privilegeApplications?: InputMaybe<Array<InputMaybe<PrivilegeApplicationEntityInput>>>;
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
